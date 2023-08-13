const { Order } = require("../../models/Orders");

const addOrder = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Order.create({ ...req.body, owner });
  res.status(201).json(result);
};
module.exports = addOrder;
