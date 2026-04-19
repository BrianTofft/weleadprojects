import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Manglende felter" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "We Lead Projects <noreply@weleadprojects.com>",
      to: ["hello@weleadprojects.com"],
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0f2a4a; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">Ny henvendelse via weleadprojects.com</h2>
          </div>
          <div style="background: #f5f7fa; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0f2a4a; width: 100px;">Navn:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0f2a4a;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${email}</td>
              </tr>
              ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #0f2a4a;">Telefon:</td><td style="padding: 8px 0; color: #333;">${phone}</td></tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0f2a4a; vertical-align: top;">Besked:</td>
                <td style="padding: 8px 0; color: #333; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Email kunne ikke sendes" }, { status: 500 });
  }
}
