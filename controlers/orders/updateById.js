const { Order } = require("../../models/Orders");
const { RequestError } = require("../../helpers");

const updateById = async (req, res, next) => {
  const result = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};
module.exports = updateById;
