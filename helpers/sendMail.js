const nodemailer = require("nodemailer");
const { SENDMAIL_API_KEY } = process.env;

const transporterOptions = {
  service: "gmail",
  auth: {
    user: "lena.s26367@gmail.com",
    pass: SENDMAIL_API_KEY,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const sendMail = async (data) => {
  const transporter = nodemailer.createTransport(transporterOptions);

  const mail = { ...data, from: "lena.s26367@gmail.com" };
  await transporter.sendMail(mail, (error, info) => {
    if (error) {
      return { message: error };
    } else {
      return { message: "Mail send" };
    }
  });
};

module.exports = sendMail;
