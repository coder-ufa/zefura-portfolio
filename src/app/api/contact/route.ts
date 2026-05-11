import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHTML = (str: string) => {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
};

export async function POST(request: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ success: false, message: "Server configuration error: Missing App Passwords." }, { status: 500 });
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json({ success: false, message: "Invalid request format." }, { status: 400 });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 });
    }

    const safeName = escapeHTML(name.trim());
    const safeEmail = escapeHTML(email.trim());
    const safeMessage = escapeHTML(message.trim());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: safeEmail, 
      subject: `Zefura Lead: New Message from ${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #111;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p style="white-space: pre-wrap; color: #333;">${safeMessage}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error: any) {
    // FIX: Grab the EXACT error message from Nodemailer and send it to the client
    console.error("Backend Email Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to send email via Nodemailer." }, { status: 500 });
  }
}