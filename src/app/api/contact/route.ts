import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,      // Örn: hello@arslionix.com
      pass: process.env.EMAIL_PASS,      // Gmail app password (16 haneli)
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New LifeX Message from ${name}`,
      text: `
You have a new message from LifeX website!

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
  }
}
