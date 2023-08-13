const { Order } = require("../../models/Orders");
const { RequestError } = require("../../helpers");

const listOrders = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Order.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  res.json(result);
  if (!result) {
    throw RequestError(404, "Not found");
  }
};
module.exports = listOrders;
