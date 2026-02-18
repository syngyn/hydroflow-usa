import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import Stripe from 'npm:stripe@17.5.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));

Deno.serve(async (req) => {
  try {
    const { cart, state, customerEmail, customerName, billingAddress, shippingAddress } = await req.json();

    // Shipping rates by state code
    const SHIPPING_RATES = {
      'AL': 31.57, 'AK': 184.8, 'AZ': 30.14, 'AR': 30.14, 'CA': 29.1,
      'CO': 29.1, 'CT': 30.14, 'DE': 30.14, 'FL': 30.14, 'GA': 30.14,
      'HI': 184.8, 'ID': 29.1, 'IL': 30.14, 'IN': 30.14, 'IA': 30.14,
      'KS': 30.14, 'KY': 30.14, 'LA': 30.14, 'ME': 31.57, 'MD': 30.14,
      'MA': 30.14, 'MI': 30.14, 'MN': 30.14, 'MS': 30.14, 'MO': 30.14,
      'MT': 29.1, 'NE': 30.14, 'NV': 29.1, 'NH': 30.14, 'NJ': 30.14,
      'NM': 29.1, 'NY': 30.14, 'NC': 30.14, 'ND': 30.14, 'OH': 30.14,
      'OK': 30.14, 'OR': 29.1, 'PA': 30.14, 'RI': 30.14, 'SC': 30.14,
      'SD': 30.14, 'TN': 30.14, 'TX': 30.14, 'UT': 29.1, 'VT': 30.14,
      'VA': 30.14, 'WA': 29.1, 'WV': 30.14, 'WI': 30.14, 'WY': 29.1,
      'AS': 184.8, 'DC': 30.14, 'GU': 184.8, 'MP': 184.8, 'PR': 184.8, 'VI': 184.8
    };

    // Validate state
    if (!state || !SHIPPING_RATES[state]) {
      return Response.json({ error: 'Invalid US state' }, { status: 400 });
    }

    // Calculate tax (10.5% for WA, 0% for others)
    const taxRate = state === 'WA' ? 0.105 : 0;
    const shippingCost = SHIPPING_RATES[state];

    // Create line items from cart
    const lineItems = cart.map(item => {
      const productData = {
        name: item.name,
        images: item.image ? [item.image] : [],
      };
      
      // Only add description if it exists and is not empty
      if (item.coverage && item.coverage.trim()) {
        productData.description = item.coverage;
      }
      
      return {
        price_data: {
          currency: 'usd',
          product_data: productData,
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    // Calculate subtotal for tax
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxAmount = Math.round(subtotal * taxRate * 100); // Tax in cents

    // Add shipping as a line item
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Shipping',
        },
        unit_amount: Math.round(shippingCost * 100),
      },
      quantity: 1,
    });

    // Add tax as a line item if applicable
    if (taxAmount > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Washington State Sales Tax (10.5%)',
          },
          unit_amount: taxAmount,
        },
        quantity: 1,
      });
    }

    // Get the origin from the request URL
    const origin = new URL(req.url).origin;

    // Prepare session config
    const sessionConfig = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      customer_email: customerEmail,
      metadata: {
        base44_app_id: Deno.env.get('BASE44_APP_ID'),
        customer_name: customerName,
        state: state,
      },
    };

    // Add shipping details if provided
    if (shippingAddress) {
      sessionConfig.shipping_address_collection = null;
    }

    // Add billing details if provided
    if (billingAddress) {
      sessionConfig.billing_address_collection = null;
      sessionConfig.customer_creation = 'always';
      sessionConfig.phone_number_collection = { enabled: true };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});