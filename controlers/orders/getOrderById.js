const { Order } = require("../../models/Orders");
const { RequestError } = require("../../helpers");

const getOrderById = async (req, res, next) => {
  const result = await Order.findById(req.params.orderId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({});
};
module.exports = getOrderById;
