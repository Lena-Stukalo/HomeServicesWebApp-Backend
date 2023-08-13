const { User } = require("../../models/Users");
const bcrypt = require("bcrypt");

const changePassword = async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  await User.findByIdAndUpdate(_id, {
    password: hashPassword,
  });
  res.json({
    message: "Pasword change success",
  });
};
module.exports = changePassword;
