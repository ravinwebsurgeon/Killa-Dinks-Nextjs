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
//   if (attachment) {
//     const mailOptions = {
//       from: 'thefabcodeuser9@gmail.com',
//       to: 'thefabcodeuser9@gmail.com',
//       subject,
//       html,
//         attachments: [
//           {
//             path: attachment
//           }
//         ],
//     };

//     try {
//         console.log(mailOptions)
//       const info = await transporter.sendMail(mailOptions);
//       return true;
//     } catch (error) {
//       return JSON.stringify(error);
//     }
//   } 
//   else {
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
