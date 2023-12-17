
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testmm514@gmail.com',
    pass: '*********',
  },
});

const mailOptions = {
  from: 'testmm514@gmail.com',
  to: 'yfzyfz19@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});
