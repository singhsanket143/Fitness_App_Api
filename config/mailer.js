const nodemailer = require('nodemailer');
console.log("email and pass", process.env.EMAIL, process.env.PASSWORD);
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2aeeb22631d0a0",
      pass: "25fa96aad0e5bd"
    }
  });

module.exports = {
    transporter
}