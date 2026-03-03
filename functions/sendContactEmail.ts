import { Resend } from 'npm:resend@4.0.0';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

Deno.serve(async (req) => {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, state, inquiryType, message } = body;

        console.log('Sending contact email via Resend for:', email);

        const result = await resend.emails.send({
            from: 'HydroFLOW <noreply@hydroflow-usa.com>',
            to: ['sales@hydroflow-usa.com'],
            reply_to: email,
            subject: `Contact Form: ${inquiryType || 'General'} from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>State/Zip:</strong> ${state || 'N/A'}</p>
                <p><strong>Inquiry Type:</strong> ${inquiryType || 'N/A'}</p>
                <hr/>
                <p><strong>Message:</strong></p>
                <p style="white-space:pre-wrap;">${message}</p>
            `
        });

        console.log('Resend result:', JSON.stringify(result));

        if (result.error) {
            console.error('Resend error:', result.error);
            return Response.json({ error: result.error.message }, { status: 500 });
        }

        return Response.json({ success: true, id: result.data?.id });
    } catch (error) {
        console.error('Error sending contact email:', error.message);
        return Response.json({ error: error.message }, { status: 500 });
    }
});