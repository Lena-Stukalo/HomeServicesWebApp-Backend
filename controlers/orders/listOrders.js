const { Order } = require("../../models/Orders");
const { RequestError } = require("../../helpers");

const listOrders = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 0, limit = 10 } = req.query;
  const skip = page * limit;
  const result = await Order.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  const total = await Order.countDocuments({ owner });
  res.json({ result, total });
  if (!result) {
    throw RequestError(404, "Not found");
  }
};
module.exports = listOrders;
