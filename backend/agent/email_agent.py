import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def email_agent(state):

    report = state["report"]

    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("APP_PASSWORD")
    receiver_email = os.getenv("RECEIVER_EMAIL")

    msg = MIMEMultipart()

    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = "AI Test Execution Report"

    msg.attach(
        MIMEText(report, "plain")
    )

    try:

        with smtplib.SMTP(
                "smtp.gmail.com",
                587
        ) as server:

            server.starttls()
            #to debug
            print("SENDER:", repr(sender_email))
            print("APP PASSWORD EXISTS:", sender_password is not None)
            print("PASSWORD LENGTH:", len(sender_password))
            print("RECEIVER:", repr(receiver_email))
            server.login(
                sender_email,
                sender_password
            )

            server.send_message(msg)

        return {
            "email_status": "Email sent successfully"
        }

    except Exception as e:

        return {
            "email_status": str(e)
        }