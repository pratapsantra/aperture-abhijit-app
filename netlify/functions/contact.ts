// netlify/functions/contact.ts

import { Handler } from '@netlify/functions'
import nodemailer from 'nodemailer'

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    const body = JSON.parse(event.body || '{}')
    console.log("Received body:", body)

    const { fname, phone_no, email, message, eventDate, eventTypeOption, location } = body
    if (!fname || !email || !message || !phone_no || !eventDate || !eventTypeOption || !location) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing fields' }),
      }
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${fname}`,
      text: `
        You have a new enquiry:

        Name: ${fname} 
        Email: ${email}
        Whatsapp Number: ${phone_no}
        Message: ${message}
        Event Date: ${eventDate}
        Event Type: ${eventTypeOption}
        Location: ${location}
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error("Email sending failed:", err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}
