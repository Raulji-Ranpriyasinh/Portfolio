const RESEND_ACCOUNT_EMAIL = 'rrrfactz@gmail.com';
const CONTACT_EMAIL = 'ranpriyasinhraulji@gmail.com';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, projectType, budget, message } = req.body || {};
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(400).json({
      error: 'Missing RESEND_API_KEY environment variable. Please configure it in your hosting environment.',
    });
  }

  const toEmail = process.env.RESEND_TO_EMAIL || RESEND_ACCOUNT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Portfolio Inquiry <${fromEmail}>`,
        to: [toEmail],
        subject: `New Project Inquiry: ${name || 'Client'} (${projectType || 'General'})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1e1b14; max-width: 600px; background-color: #fff9ef; border: 2px solid #1b1b2f; border-radius: 16px;">
            <div style="background-color: #ffb703; color: #1b1b2f; padding: 8px 16px; border-radius: 8px; font-weight: 800; display: inline-block; margin-bottom: 16px; border: 1px solid #1b1b2f;">
              🚀 New Client Inquiry
            </div>
            <h2 style="color: #1b1b2f; margin-top: 0; font-size: 22px;">You received a new inquiry on your portfolio!</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 15px;">
              <tr style="border-bottom: 1px solid #e0d9ce;">
                <td style="padding: 10px 0; font-weight: 700; width: 140px; color: #514532;">Client Name:</td>
                <td style="padding: 10px 0; font-weight: 800; color: #1b1b2f;">${name || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0d9ce;">
                <td style="padding: 10px 0; font-weight: 700; color: #514532;">Phone / WhatsApp:</td>
                <td style="padding: 10px 0; font-weight: 800; color: #12a594;">
                  <a href="https://wa.me/${(phone || '').replace(/[^0-9]/g, '')}" style="color: #12a594; text-decoration: none;">
                    ${phone || 'N/A'} (Chat on WhatsApp)
                  </a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e0d9ce;">
                <td style="padding: 10px 0; font-weight: 700; color: #514532;">Project Type:</td>
                <td style="padding: 10px 0; font-weight: 700; color: #1b1b2f;">${projectType || 'N/A'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0d9ce;">
                <td style="padding: 10px 0; font-weight: 700; color: #514532;">Budget:</td>
                <td style="padding: 10px 0; font-weight: 800; color: #7d5800;">${budget || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 700; color: #514532; vertical-align: top;">Contact Mail:</td>
                <td style="padding: 10px 0; color: #514532; font-size: 13px;">${CONTACT_EMAIL}</td>
              </tr>
            </table>

            <div style="background-color: #ffffff; padding: 16px; border-radius: 12px; border: 1.5px solid #1b1b2f; margin-top: 20px;">
              <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: #ff5a4e; margin-bottom: 6px;">Project Idea & Details:</div>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 14px; color: #1e1b14;">${message || 'No description provided'}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e0d9ce; font-size: 12px; color: #837560; text-align: center;">
              Ranpriyasinh Freelance Developer Portfolio • Vadodara, Gujarat
            </div>
          </div>
        `,
      }),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      return res.status(resendResponse.status).json({
        error: resendResult.message || 'Resend failed to send email.',
      });
    }

    return res.status(200).json({ success: true, id: resendResult.id });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
