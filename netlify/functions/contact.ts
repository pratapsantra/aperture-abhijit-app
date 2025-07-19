import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'



export async function POST(req:NextRequest ) {
  const body = await req.json()
  console.log("Received body:", body)

  const { fname, phone_no, email, message, eventDate, eventTypeOption, location } = body
  const name = `${fname} `

  if (!fname || !email || !message || !phone_no || !eventDate || !eventTypeOption || !location) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
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
      subject: `New Contact from ${name}`,
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

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Email sending failed:", err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
