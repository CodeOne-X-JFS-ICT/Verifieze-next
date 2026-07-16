import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, services, message, website } = body;

    // ── Honeypot bot protection ──────────────────────────────────────────
    if (website && website.trim() !== "") {
      console.warn("Honeypot filled by bot. Silently ignoring submission.");
      return NextResponse.json({ success: true });
    }

    // ── Basic server-side validation ──────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Format services list for email
    const servicesHtml = Array.isArray(services) && services.length > 0
      ? services.map(s => `<li style="margin:2px 0;">${s}</li>`).join('')
      : '<li>—</li>';
    const servicesText = Array.isArray(services) && services.length > 0
      ? services.join(', ')
      : '—';

    // ── Create transporter using env vars (never hardcoded) ───────────────
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true", // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ── Email sent TO Verifieze (notification) ────────────────────────────
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Enquiry — ${servicesText} | ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: #003366; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">📩 New Contact Form Submission</h1>
            <p style="margin: 6px 0 0; opacity: 0.85;">via Verifieze.com</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #003366;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${company || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Services Interested</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #222;">
                  <ul style="margin: 0; padding-left: 16px;">${servicesHtml}</ul>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #222; white-space: pre-line;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f0f4ff; border-radius: 6px; font-size: 13px; color: #666;">
              <strong>Reply-to:</strong> ${email}<br/>
              <strong>Received at:</strong> ${new Date().toLocaleString("en-LK", { timeZone: "Asia/Colombo" })} (Sri Lanka Time)
            </div>
          </div>
        </div>
      `,
    });

    // ── Auto-reply sent TO the visitor ────────────────────────────────────
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting Verifieze — We'll be in touch shortly",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #003366; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">Thank You, ${name}!</h1>
          </div>
          <div style="background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
            <p style="color: #333; font-size: 16px;">We've received your message and our team will get back to you within <strong>24 hours</strong>.</p>
            <p style="color: #333;">In the meantime, you can reach us directly at:</p>
            <ul style="color: #003366; font-weight: bold;">
              <li>📞 +94 112 746 010</li>
              <li>✉️ checks@verifieze.com</li>
            </ul>
            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
            <p style="color: #999; font-size: 12px;">Verifieze (Pvt) Ltd — 01 Lake Cres, Colombo 02, Sri Lanka</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
