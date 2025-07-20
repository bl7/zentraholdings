import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, company, subject, message } = data;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Admin notification email template
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4A164B;">New Contact Form Submission</h2>
        <p style="font-size: 16px;">You have received a new message from the Zentra Holdings website contact form.</p>
        <table style="width: 100%; margin: 24px 0; border-collapse: collapse;">
          <tr><td style="font-weight: bold; padding: 4px 8px;">Name:</td><td style="padding: 4px 8px;">${firstName} ${lastName}</td></tr>
          <tr><td style="font-weight: bold; padding: 4px 8px;">Email:</td><td style="padding: 4px 8px;">${email}</td></tr>
          <tr><td style="font-weight: bold; padding: 4px 8px;">Company:</td><td style="padding: 4px 8px;">${company || '-'}</td></tr>
          <tr><td style="font-weight: bold; padding: 4px 8px;">Subject:</td><td style="padding: 4px 8px;">${subject}</td></tr>
        </table>
        <div style="background: #F8F6FC; padding: 16px; border-radius: 8px;">
          <p style="font-size: 15px; color: #333;"><strong>Message:</strong></p>
          <p style="font-size: 15px; color: #333; white-space: pre-line;">${message}</p>
        </div>
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 13px; color: #888;">Zentra Holdings Ltd. &mdash; Contact Form Notification</p>
      </div>
    `;

    // Confirmation email to sender
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4A164B;">Thank you for contacting Zentra Holdings Ltd.</h2>
        <p style="font-size: 16px;">Hi ${firstName},</p>
        <p style="font-size: 15px;">We have received your message and our team will get back to you as soon as possible. Here is a copy of your submission for your records:</p>
        <table style="width: 100%; margin: 24px 0; border-collapse: collapse;">
          <tr><td style="font-weight: bold; padding: 4px 8px;">Name:</td><td style="padding: 4px 8px;">${firstName} ${lastName}</td></tr>
          <tr><td style="font-weight: bold; padding: 4px 8px;">Email:</td><td style="padding: 4px 8px;">${email}</td></tr>
          <tr><td style="font-weight: bold; padding: 4px 8px;">Company:</td><td style="padding: 4px 8px;">${company || '-'}</td></tr>
          <tr><td style="font-weight: bold; padding: 4px 8px;">Subject:</td><td style="padding: 4px 8px;">${subject}</td></tr>
        </table>
        <div style="background: #F8F6FC; padding: 16px; border-radius: 8px;">
          <p style="font-size: 15px; color: #333;"><strong>Your Message:</strong></p>
          <p style="font-size: 15px; color: #333; white-space: pre-line;">${message}</p>
        </div>
        <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 13px; color: #888;">Zentra Holdings Ltd. &mdash; This is an automated confirmation. No further action is required.</p>
      </div>
    `;

    // Send to admin
    await sendMail({
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_EMAIL!,
      subject: `Contact Form: ${subject} (${firstName} ${lastName})`,
      body: html,
    });

    // Send confirmation to sender
    await sendMail({
      to: email,
      subject: `We received your message at Zentra Holdings Ltd.`,
      body: confirmationHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
} 