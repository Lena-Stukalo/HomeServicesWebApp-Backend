const { User } = require("../../models/Users");
const { v4: uuid } = require("uuid");
const { createVerifyEmail, sendMail } = require("../../helpers");

const sendResetPasword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const resetToken = uuid();
  const mail = createVerifyEmail(email, resetToken, "resetpassword");
  await User.findByIdAndUpdate(user._id, {
    verificationToken: resetToken,
  });

  const result = await sendMail(mail);
  res.json({
    ...result,
  });
};
module.exports = sendResetPasword;
