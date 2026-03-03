import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { firstName, lastName, email, phone, state, inquiryType, message } = await req.json();

        await base44.asServiceRole.integrations.Core.SendEmail({
            to: 'sales@hydroflow-usa.com',
            subject: `Contact Form: ${inquiryType || 'General'} from ${firstName} ${lastName}`,
            body: `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'N/A'}
State/Zip: ${state || 'N/A'}
Inquiry Type: ${inquiryType || 'N/A'}

Message:
${message}`
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error('Error sending contact email:', error);
        return Response.json({ error: error.message }, { status: 500 });
    }
});