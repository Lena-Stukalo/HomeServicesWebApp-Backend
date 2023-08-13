const { User } = require("../models/Users");
const { RequestError } = require("../helpers");

const isVerifyExist = async (req, res, next) => {
  try {
    const { Token } = req.params;
    console.log(Token);
    const result = await User.findOne({ verificationToken: Token });
    if (!result) {
      throw RequestError(404, "Not found");
    }
    req.user = result;
    next();
  } catch (e) {
    res.status(e.status).json(e.message);
  }
};
module.exports = isVerifyExist;
