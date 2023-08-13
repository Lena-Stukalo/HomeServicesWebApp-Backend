const { isValidObjectId } = require("mongoose");
const { RequestError } = require("../helpers");
const isValidId = (req, res, next) => {
  const result = isValidObjectId(req.params.orderId);
  if (!result) {
    next(RequestError(400, "Invalid id"));
  }
  next();
};
module.exports = isValidId;
