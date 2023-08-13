const { User } = require("../../models/Users");
const bcrypt = require("bcrypt");

const resetPassword = async (req, res) => {
  const { _id } = req.user;
  const hashPassword = await bcrypt.hash("aaaa", 10);
  await User.findByIdAndUpdate(_id, {
    verificationToken: "",
    password: hashPassword,
  });
  res.json({
    message:
      "Reset password success. Your password changed to 'aaaa' Change it on a first opportunity",
  });
};
module.exports = resetPassword;
