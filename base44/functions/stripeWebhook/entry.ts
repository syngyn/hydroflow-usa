import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import Stripe from 'npm:stripe@16.11.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const signature = req.headers.get('stripe-signature');
    const body = await req.text();
    
    let event;
    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        Deno.env.get('STRIPE_WEBHOOK_SECRET')
      );
    } catch (error) {
      console.error('Webhook signature verification failed:', error.message);
      return new Response(JSON.stringify({ error: 'Webhook signature verification failed' }), { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      if (session.payment_status === 'paid') {
        console.log('Processing order for session:', session.id);
        
        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name;
        
        // Fetch order details from Base44
        const orders = await base44.asServiceRole.entities.Order.filter({
          stripe_session_id: session.id
        });
        
        const order = orders.length > 0 ? orders[0] : null;
        
        if (!order) {
          console.warn('Order not found for session:', session.id);
          return new Response(JSON.stringify({ received: true }), { status: 200 });
        }

        const itemsList = order.items?.map(item => `- ${item.name} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}`).join('\n') || 'N/A';
        
        // Email to sales team
        const salesEmailBody = `
New Order Received!

Order ID: ${order.id}
Session ID: ${session.id}

Customer Information:
Name: ${customerName || 'N/A'}
Email: ${customerEmail || 'N/A'}
Phone: ${order.customer_phone || 'N/A'}

Items:
${itemsList}

Subtotal: $${(order.subtotal || 0).toFixed(2)}
Shipping: $${(order.shipping_cost || 0).toFixed(2)}
Tax: $${(order.tax_amount || 0).toFixed(2)}
Discount: -$${(order.discount_amount || 0).toFixed(2)}
Total: $${(order.total_amount || 0).toFixed(2)}

${order.coupon_code ? `Coupon Code: ${order.coupon_code}` : ''}

Shipping Address:
${order.shipping_address ? JSON.stringify(order.shipping_address, null, 2) : 'N/A'}
        `;
        
        // Email to customer
        const customerEmailBody = `
Thank you for your purchase!

Order Confirmation
Order ID: ${order.id}

Items:
${itemsList}

Subtotal: $${(order.subtotal || 0).toFixed(2)}
Shipping: $${(order.shipping_cost || 0).toFixed(2)}
Tax: $${(order.tax_amount || 0).toFixed(2)}
${order.discount_amount > 0 ? `Discount: -$${(order.discount_amount || 0).toFixed(2)}` : ''}

Total: $${(order.total_amount || 0).toFixed(2)}

We'll send you a shipping confirmation soon!

Questions? Contact us at sales@hydroflow-usa.com
        `;
        
        // Send emails
        try {
          await base44.asServiceRole.integrations.Core.SendEmail({
            to: 'sales@hydroflow-usa.com',
            subject: `New Order: ${order.id}`,
            body: salesEmailBody,
            from_name: 'HydroFLOW'
          });
          console.log('Sales email sent for order:', order.id);
        } catch (error) {
          console.error('Failed to send sales email:', error.message);
        }
        
        if (customerEmail) {
          try {
            await base44.asServiceRole.integrations.Core.SendEmail({
              to: customerEmail,
              subject: 'Order Confirmation - HydroFLOW',
              body: customerEmailBody,
              from_name: 'HydroFLOW'
            });
            console.log('Customer confirmation email sent to:', customerEmail);
          } catch (error) {
            console.error('Failed to send customer email:', error.message);
          }
        }
      }
    }
    
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});