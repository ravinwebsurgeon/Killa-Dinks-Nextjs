'use server';
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'killadinks735@gmail.com',
    pass: process.env.NODEMAILER_PASSWORD
  }
});


const sendEmail = async (
  // to: any,
   subject: any, html: any, 
    // attachment: any
) => {

    const mailOptions = {
      from: 'killadinks735@gmail.com',
      to:'killadinks@gmail.com',
      subject,
      html
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      return JSON.stringify({ error: error, status: true });
    }
//   }
};

export default sendEmail;
