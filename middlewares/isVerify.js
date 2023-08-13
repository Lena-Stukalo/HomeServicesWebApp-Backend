const { User } = require("../models/Users");
const { RequestError } = require("../helpers");

const isVerify = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.verify) {
      throw RequestError(401, "Email or password wrong");
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(e.status).json(e.message);
  }
};
module.exports = isVerify;
