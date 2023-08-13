const express = require("express");
const { cntrlWrapper } = require("../../helpers");
const {
  validateBody,
  authenticate,
  isVerify,
  isVerifyExist,
} = require("../../middlewares");
const { schemas } = require("../../models/Users");
const ctrl = require("../../controlers/auth");

const router = express.Router();
router.post(
  "/register",
  validateBody(schemas.registerSchems),
  cntrlWrapper(ctrl.registerContrl)
);
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  isVerify,
  cntrlWrapper(ctrl.loginContrl)
);
router.get("/current", authenticate, cntrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, cntrlWrapper(ctrl.logOut));
router.get("/verify/:verificationToken", cntrlWrapper(ctrl.verify));
router.post(
  "/verify",
  validateBody(schemas.EmailSchema),
  cntrlWrapper(ctrl.resendEmail)
);
router.patch(
  "/changepassword",
  validateBody(schemas.PasswordSchema),
  authenticate,
  cntrlWrapper(ctrl.changePassword)
);
router.patch(
  "/resetpassword",
  validateBody(schemas.EmailSchema),
  isVerify,
  cntrlWrapper(ctrl.sendResetPasword)
);
router.get(
  "/resetpassword/:Token",
  isVerifyExist,
  cntrlWrapper(ctrl.resetPassword)
);
module.exports = router;
