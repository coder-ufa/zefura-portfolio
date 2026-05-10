import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. Get the data from the frontend form
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 2. Log into your Zefura Gmail account securely
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Format how the email will look when it arrives in your inbox
    const mailOptions = {
      from: process.env.EMAIL_USER, // The email is sent FROM your server
      to: process.env.EMAIL_USER,   // And delivered TO your inbox
      replyTo: email,               // If you hit "Reply", it goes to the client!
      subject: `New Agency Inquiry from ${name}`,
      text: `You have a new project request from Zefura.dev:\n\nName: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Project Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // 4. Send the email!
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Backend Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}