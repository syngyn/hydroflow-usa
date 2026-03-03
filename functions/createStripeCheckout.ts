import Stripe from 'npm:stripe@17.5.0';

const stripe = new Stripe(Deno.env.get('STRIPE_TEST_SECRET_KEY'));

Deno.serve(async (req) => {
  // Only handle POST requests - GET requests should go to frontend pages
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let body;
  try {
    console.log('Parsing request body...');
    
    // Clone the request to read it twice if needed
    const clonedReq = req.clone();
    const text = await clonedReq.text();
    console.log('Raw body length:', text?.length || 0);

    if (!text || text.trim() === '') {
      console.error('Empty request body received');
      return Response.json({ error: 'Request body is empty' }, { status: 400 });
    }

    body = JSON.parse(text);
    const { cart, state, customerEmail, customerName, frontendUrl, shippingAddress, couponDiscount, couponCode } = body;

    console.log('Request received:', { state, customerEmail, cartLength: cart?.length });

    if (!cart || cart.length === 0) {
      return Response.json({ error: 'Cart is empty' }, { status: 400 });
    }

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

    // Check if all items have no shipping
    const allNoShipping = cart.every(item => item.noShipping);

    // Validate state (only required if any items need shipping)
    if (!allNoShipping && (!state || !SHIPPING_RATES[state])) {
      console.error('Invalid state:', state);
      return Response.json({ error: 'Invalid US state' }, { status: 400 });
    }

    // Calculate tax (10.5% for WA, 0% for others)
    const taxRate = state === 'WA' ? 0.105 : 0;
    const shippingCost = SHIPPING_RATES[state];

    // Create line items from cart
    const lineItems = cart.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
          description: item.coverage || undefined,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Calculate subtotal and discount
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = parseFloat(couponDiscount) || 0;
    const subtotalAfterDiscount = Math.max(0, subtotal - discountAmount);
    
    // Apply discount proportionally to cart items before sending to Stripe
    if (discountAmount > 0 && subtotal > 0) {
      const discountRatio = 1 - (discountAmount / subtotal);
      lineItems.forEach(item => {
        item.price_data.unit_amount = Math.round(item.price_data.unit_amount * discountRatio);
      });
    }
    
    const taxAmount = Math.round(subtotalAfterDiscount * taxRate * 100);

    // Add shipping
    lineItems.push({
      price_data: {
        currency: 'usd',
        product_data: { name: 'Shipping' },
        unit_amount: Math.round(shippingCost * 100),
      },
      quantity: 1,
    });

    // Add tax if applicable
    if (taxAmount > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: { name: 'Washington State Sales Tax (10.5%)' },
          unit_amount: taxAmount,
        },
        quantity: 1,
      });
    }

    console.log('Creating Stripe session...');
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${frontendUrl}/CheckoutSuccess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/Checkout`,
      customer_email: customerEmail,
      phone_number_collection: { enabled: true },
      metadata: {
        base44_app_id: Deno.env.get('BASE44_APP_ID'),
        customer_name: customerName,
        shipping_state: state,
        shipping_address: JSON.stringify(shippingAddress),
      },
    });

    console.log('Session created successfully:', session.id);

    // Save order to database immediately when checkout session is created
    const { createClientFromRequest } = await import('npm:@base44/sdk@0.8.6');
    const base44 = createClientFromRequest(req);

    const orderItems = cart.map(item => ({
      name: item.name,
      quantity: item.quantity,
      unit_price: item.price,
      total_price: item.price * item.quantity
    }));

    await base44.asServiceRole.entities.Order.create({
      stripe_session_id: session.id,
      stripe_payment_status: 'pending',
      customer_name: customerName,
      customer_email: customerEmail,
      items: orderItems,
      subtotal: subtotalAfterDiscount,
      shipping_cost: shippingCost,
      tax_amount: taxAmount / 100,
      discount_amount: discountAmount,
      coupon_code: couponCode,
      total_amount: (subtotalAfterDiscount + shippingCost + (taxAmount / 100)),
      shipping_address: shippingAddress,
      shipping_state: state,
      status: 'pending'
    });

    console.log('Order saved to database with pending status');
    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return Response.json({ error: error.message || 'Checkout failed' }, { status: 500 });
  }
});