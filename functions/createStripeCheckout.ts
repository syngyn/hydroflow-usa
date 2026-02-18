import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import Stripe from 'npm:stripe@17.5.0';

const stripe = new Stripe(Deno.env.get('STRIPE_TEST_SECRET_KEY'));

Deno.serve(async (req) => {
  try {
    const { cart, state, customerEmail, customerName } = await req.json();

    // Validate state is a US state
    const US_STATE_CODES = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    
    if (!state || !US_STATE_CODES.includes(state)) {
      return Response.json({ error: 'Invalid US state' }, { status: 400 });
    }

    // Calculate tax (10.5% for WA, 0% for others)
    const taxRate = state === 'WA' ? 0.105 : 0;

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

    const session = await stripe.checkout.sessions.create({
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
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      billing_address_collection: 'required',
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});