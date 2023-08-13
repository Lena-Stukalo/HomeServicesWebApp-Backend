const { User } = require("../../models/Users");
const { RequestError, sendMail, createVerifyEmail } = require("../../helpers");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");

const registerContrl = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = uuid();
  const result = await User.create({
    ...req.body,
    password: hashPassword,
    verificationToken,
  });
  const mail = createVerifyEmail(email, verificationToken, "verify");

  await sendMail(mail);

  res.status(201).json({
    email: result.email,
    subscription: result.subscription,
  });
};
module.exports = registerContrl;
