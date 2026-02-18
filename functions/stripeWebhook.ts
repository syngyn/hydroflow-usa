import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';
import Stripe from 'npm:stripe@17.5.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const signature = req.headers.get('stripe-signature');
  const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');

  try {
    const body = await req.text();
    
    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      webhookSecret
    );

    console.log('Webhook event:', event.type);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      
      // Retrieve full session with line items
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items']
      });

      const customerEmail = fullSession.customer_details?.email || fullSession.customer_email;
      const customerName = fullSession.metadata?.customer_name || fullSession.customer_details?.name || 'Customer';
      const lineItems = fullSession.line_items?.data || [];

      // Build order items HTML
      let itemsHtml = '';
      lineItems.forEach(item => {
        const unitPrice = (item.price.unit_amount / 100).toFixed(2);
        const totalPrice = ((item.price.unit_amount * item.quantity) / 100).toFixed(2);
        itemsHtml += `
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${item.description}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">$${unitPrice}</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right; font-weight: 600;">$${totalPrice}</td>
          </tr>
        `;
      });

      const totalAmount = (fullSession.amount_total / 100).toFixed(2);
      
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <!-- Header with Logo -->
                  <tr>
                    <td style="background-color: #0891b2; padding: 30px; text-align: center;">
                      <img src="https://hydroflow-usa.com/wp-content/uploads/2023/10/logo.svg" alt="HydroFLOW USA" style="max-width: 200px; height: auto;">
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h1 style="margin: 0 0 20px 0; color: #0f172a; font-size: 28px;">Thank You for Your Order!</h1>
                      <p style="margin: 0 0 20px 0; color: #475569; font-size: 16px; line-height: 1.5;">
                        Hi ${customerName},
                      </p>
                      <p style="margin: 0 0 30px 0; color: #475569; font-size: 16px; line-height: 1.5;">
                        Your order has been confirmed and is being processed. Here are the details:
                      </p>
                      
                      <!-- Order Details -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px; border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;">
                        <thead>
                          <tr style="background-color: #f8fafc;">
                            <th style="padding: 12px; text-align: left; font-weight: 600; color: #0f172a; border-bottom: 2px solid #e5e7eb;">Item</th>
                            <th style="padding: 12px; text-align: center; font-weight: 600; color: #0f172a; border-bottom: 2px solid #e5e7eb;">Qty</th>
                            <th style="padding: 12px; text-align: right; font-weight: 600; color: #0f172a; border-bottom: 2px solid #e5e7eb;">Price</th>
                            <th style="padding: 12px; text-align: right; font-weight: 600; color: #0f172a; border-bottom: 2px solid #e5e7eb;">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${itemsHtml}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="3" style="padding: 16px; text-align: right; font-weight: 600; color: #0f172a; font-size: 18px;">Total:</td>
                            <td style="padding: 16px; text-align: right; font-weight: 700; color: #0891b2; font-size: 18px;">$${totalAmount}</td>
                          </tr>
                        </tfoot>
                      </table>
                      
                      <p style="margin: 0 0 10px 0; color: #475569; font-size: 14px;">
                        <strong>Order ID:</strong> ${session.id}
                      </p>
                      <p style="margin: 0 0 30px 0; color: #475569; font-size: 14px;">
                        <strong>Email:</strong> ${customerEmail}
                      </p>
                      
                      <p style="margin: 0 0 10px 0; color: #475569; font-size: 16px; line-height: 1.5;">
                        We'll send you a shipping confirmation email as soon as your order ships.
                      </p>
                      <p style="margin: 0; color: #475569; font-size: 16px; line-height: 1.5;">
                        If you have any questions, feel free to contact us.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px;">
                        HydroFLOW USA<br>
                        Eco-Friendly Water Treatment Solutions
                      </p>
                      <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                        © ${new Date().getFullYear()} HydroFLOW USA. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      // Send to customer
      await base44.asServiceRole.integrations.Core.SendEmail({
        from_name: 'HydroFLOW USA',
        to: customerEmail,
        subject: `Order Confirmation - HydroFLOW USA`,
        body: emailHtml
      });

      console.log('Receipt sent to customer:', customerEmail);

      // Send copy to Jason
      await base44.asServiceRole.integrations.Core.SendEmail({
        from_name: 'HydroFLOW USA',
        to: 'jason.rusk@hydroflow-usa.com',
        subject: `New Order - ${customerName} - $${totalAmount}`,
        body: emailHtml
      });

      console.log('Receipt copy sent to jason.rusk@hydroflow-usa.com');
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return Response.json({ error: error.message }, { status: 400 });
  }
});