const express = require("express");

const { cntrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/Orders");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const cntrl = require("../../controlers/orders");

const router = express.Router();

router.get("/", authenticate, cntrlWrapper(cntrl.listOrders));

router.get(
  "/:orderId",
  authenticate,
  isValidId,
  cntrlWrapper(cntrl.getOrderById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  cntrlWrapper(cntrl.addOrder)
);

router.delete(
  "/:orderId",
  authenticate,
  isValidId,
  cntrlWrapper(cntrl.removeOrder)
);

router.patch(
  "/:orderId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  cntrlWrapper(cntrl.updateById)
);

module.exports = router;
