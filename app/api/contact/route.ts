import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const NAVY = "#1C2544";
const RED  = "#cc2222";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, phone, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Manglende felter" }, { status: 400 });
  }

  try {
    // Internal notification email to We Lead Projects
    await resend.emails.send({
      from: "We Lead Projects <noreply@weleadprojects.com>",
      to: ["hello@weleadprojects.com"],
      replyTo: email,
      subject: `Ny henvendelse fra ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: ${NAVY}; padding: 28px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Ny henvendelse via weleadprojects.com</h2>
          </div>
          <div style="background: #f7f5f5; padding: 28px 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: ${NAVY}; width: 110px; vertical-align: top;">Navn:</td>
                <td style="padding: 10px 0; color: #333;">${name}</td>
              </tr>
              ${company ? `<tr><td style="padding: 10px 0; font-weight: 600; color: ${NAVY}; vertical-align: top;">Virksomhed:</td><td style="padding: 10px 0; color: #333;">${company}</td></tr>` : ""}
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: ${NAVY}; vertical-align: top;">Email:</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: ${RED};">${email}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding: 10px 0; font-weight: 600; color: ${NAVY}; vertical-align: top;">Telefon:</td><td style="padding: 10px 0; color: #333;"><a href="tel:${phone}" style="color: ${RED};">${phone}</a></td></tr>` : ""}
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: ${NAVY}; vertical-align: top;">Besked:</td>
                <td style="padding: 10px 0; color: #333; white-space: pre-wrap; line-height: 1.6;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e8e0e0; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: ${RED}; color: white; padding: 10px 24px; border-radius: 99px; text-decoration: none; font-weight: 600; font-size: 14px;">Svar til ${name}</a>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await resend.emails.send({
      from: "We Lead Projects <noreply@weleadprojects.com>",
      to: [email],
      subject: "Tak for din henvendelse til We Lead Projects",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: ${NAVY}; padding: 28px 32px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0; font-size: 22px;">We Lead Projects</h2>
            <p style="color: rgba(255,255,255,0.6); margin: 8px 0 0; font-size: 14px;">Plan Well, Lead Better</p>
          </div>
          <div style="background: #f7f5f5; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8e0e0; border-top: none;">
            <p style="color: #2d1a1a; font-size: 16px; font-weight: 600; margin-top: 0;">Hej ${name},</p>
            <p style="color: #555; line-height: 1.7; margin: 0 0 16px;">Tak for din henvendelse! Vi har modtaget din besked og vender tilbage hurtigst muligt, senest den næste hverdag.</p>
            <p style="color: #555; line-height: 1.7; margin: 0 0 24px;">Har du et presserende spørgsmål, er du altid velkommen til at ringe direkte til os.</p>
            <div style="background: white; border: 1px solid #e8e0e0; border-radius: 8px; padding: 20px;">
              <p style="margin: 0 0 8px; color: #2d1a1a; font-weight: 600; font-size: 14px;">Brian P.N. Tofft, Managing Partner</p>
              <p style="margin: 0 0 6px; color: #666; font-size: 14px;">📞 <a href="tel:+4552400088" style="color: ${RED}; text-decoration: none;">+45 5240 0088</a></p>
              <p style="margin: 0; color: #666; font-size: 14px;">✉️ <a href="mailto:hello@weleadprojects.com" style="color: ${RED}; text-decoration: none;">hello@weleadprojects.com</a></p>
            </div>
            <div style="margin-top: 28px; text-align: center;">
              <a href="https://www.weleadprojects.com" style="display: inline-block; background: ${RED}; color: white; padding: 10px 28px; border-radius: 99px; text-decoration: none; font-weight: 600; font-size: 14px;">Besøg vores hjemmeside</a>
            </div>
          </div>
          <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 16px;">We Lead Projects · Industrivej 21, 4000 Roskilde · CVR 38474102</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Email kunne ikke sendes" }, { status: 500 });
  }
}
