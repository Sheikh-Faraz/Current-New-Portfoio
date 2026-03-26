import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['sheikh.faraz.ahmad.89@gmail.com'],
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
