import nodemailer from 'nodemailer';

import { createWelcomeEmailTemplate } from './emailTemplate.js';

const sendEmail = async ({ fullName, email, clientURL }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })
    const mailOptions = {
      from: `Chatify <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Welcome to Chatify!`,
      html: createWelcomeEmailTemplate(fullName, clientURL)
    }
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendEmail;
