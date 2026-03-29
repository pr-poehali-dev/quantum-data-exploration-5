"""Отправка заявок с сайта Мастерской Горбунова на djgorbunov@gmail.com"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
        name = body.get("name", "").strip()
        phone = body.get("phone", "").strip()
        email = body.get("email", "").strip()
        message = body.get("message", "").strip()

        if not name or not message:
            return {
                "statusCode": 400,
                "headers": headers,
                "body": json.dumps({"error": "Имя и сообщение обязательны"}),
            }

        smtp_password = os.environ.get("SMTP_PASSWORD", "")
        sender = "djgorbunov@gmail.com"
        recipient = "djgorbunov@gmail.com"

        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Новая заявка с сайта — {name}"
        msg["From"] = sender
        msg["To"] = recipient

        contact_info = phone or email or "не указан"

        html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a0e08; color: #e8d5b0; padding: 32px; border-radius: 12px;">
          <div style="border-bottom: 1px solid #4a3520; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #c8841e; font-size: 22px; margin: 0;">Мастерская Горбунова</h1>
            <p style="color: #8a6840; font-size: 12px; margin: 4px 0 0;">Новая заявка с сайта</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8a6840; font-size: 13px; width: 120px;">Имя:</td>
              <td style="padding: 8px 0; font-size: 15px; font-weight: bold;">{name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8a6840; font-size: 13px;">Контакт:</td>
              <td style="padding: 8px 0; font-size: 15px;">{contact_info}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #2a1a0a; border-radius: 8px; border-left: 3px solid #c8841e;">
            <p style="color: #8a6840; font-size: 12px; margin: 0 0 8px;">Сообщение:</p>
            <p style="font-size: 15px; line-height: 1.6; margin: 0;">{message}</p>
          </div>
        </div>
        """

        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender, smtp_password)
            server.sendmail(sender, recipient, msg.as_string())

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({"success": True}),
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)}),
        }
