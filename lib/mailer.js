const nodemailer = require ("nodemailer")
const sender = async(to) => {
    try {
const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})
const options = {
    to: to,
    subject: "testing nodemailer",
    html: `
    <p style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none;">Hello ${to}</p>
  `
}
transporter.sendMail(options, (error, info) => {
  if (error) {
    console.log('error sending email:', error);
  }
  else {
    console.log('email sent:', info.response);
  }
})
    } catch (error) {
        console.log(error);
    }
}
 module.exports = sender