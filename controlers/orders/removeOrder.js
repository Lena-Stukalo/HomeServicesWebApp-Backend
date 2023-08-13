const { Order } = require("../../models/Orders");
const { RequestError } = require("../../helpers");
const removeOrder = async (req, res, next) => {
  const result = await Order.findByIdAndRemove(req.params.orderId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};
module.exports = removeOrder;
