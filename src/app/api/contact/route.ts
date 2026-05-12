import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Logs in using zefuraorders@gmail.com
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    });

    // 2. Formats the email and sends it to zefuraorders@gmail.com
    const mailOptions = {
      from: process.env.GMAIL_USER, 
      to: process.env.GMAIL_USER, // Sends directly to the orders inbox
      replyTo: email, // Lets you easily reply to the client
      subject: `New Zefura Order from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0A0A0A; padding: 20px; text-align: center;">
            <h2 style="color: #fff; margin: 0; text-transform: uppercase; letter-spacing: 2px; font-size: 16px;">New Zefura Order</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="margin: 0 0 10px 0; color: #333;"><strong>Client Name:</strong> ${name}</p>
            <p style="margin: 0 0 20px 0; color: #333;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <div style="background: #f4f4f5; padding: 20px; border-radius: 8px; border-left: 4px solid #333;">
              <p style="margin: 0; color: #555; font-size: 12px; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">Project Details:</p>
              <p style="margin: 0; color: #111; line-height: 1.6;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // 3. Send it!
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}