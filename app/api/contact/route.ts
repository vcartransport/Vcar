import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, departure, arrival, model, deadline, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !departure || !arrival || !model || !deadline) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create HTML email content with V-Car branding
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0F172A; /* brand-black */
            color: #E2E8F0; /* brand-silver */
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1E293B; /* brand-anthracite */
            border: 1px solid #C9A050; /* brand-champagne */
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #0F172A;
            padding: 30px;
            text-align: center;
            border-bottom: 1px solid #334155; /* brand-graphite */
          }
          .logo {
            font-size: 28px;
            font-weight: 300;
            letter-spacing: 4px;
            color: #FFFFFF;
            margin: 0;
            text-transform: uppercase;
          }
          .logo span {
            color: #C9A050;
            margin: 0 4px;
          }
          .title {
            color: #C9A050;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 10px;
            font-weight: 600;
          }
          .content {
            padding: 40px 30px;
          }
          .field {
            margin-bottom: 25px;
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #94A3B8;
            margin-bottom: 8px;
            display: block;
          }
          .value {
            font-size: 16px;
            color: #FFFFFF;
            padding: 12px;
            background-color: #0F172A;
            border-left: 3px solid #C9A050;
            border-radius: 0 4px 4px 0;
            margin: 0;
          }
          .footer {
            background-color: #0F172A;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #64748B;
            border-top: 1px solid #334155;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo">V<span>-</span>CAR</h1>
            <div class="title">Nouvelle Demande de Devis</div>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Client</span>
              <p class="value">${name}</p>
            </div>
            <div class="field">
              <span class="label">Contact</span>
              <p class="value">${phone} &nbsp;|&nbsp; <a href="mailto:${email}" style="color:#C9A050; text-decoration:none;">${email}</a></p>
            </div>
            <div class="field">
              <span class="label">Trajet</span>
              <p class="value"><strong>Départ :</strong> ${departure} <br/> <strong>Arrivée :</strong> ${arrival}</p>
            </div>
            <div class="field">
              <span class="label">Véhicule</span>
              <p class="value">${model}</p>
            </div>
            <div class="field">
              <span class="label">Délai souhaité</span>
              <p class="value" style="text-transform: capitalize;">${deadline}</p>
            </div>
            ${message ? `
            <div class="field">
              <span class="label">Informations Complémentaires</span>
              <p class="value" style="white-space: pre-wrap;">${message}</p>
            </div>
            ` : ""}
          </div>
          <div class="footer">
            Cet email a été envoyé depuis le formulaire de devis sécurisé du site v-car.company.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    const mailOptions = {
      from: `"V-Car Website" <${process.env.EMAIL_USER}>`,
      to: "contact@v-car.company",
      replyTo: email, // Permet de faire "Répondre" directement au client
      subject: `🚘 Nouveau Devis : ${departure} ➔ ${arrival} (${model})`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
