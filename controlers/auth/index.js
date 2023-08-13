const loginContrl = require("./loginContrl");
const registerContrl = require("./registerContrl");
const getCurrent = require("./getCurrent");
const logOut = require("./logOut");
const verify = require("./verify");
const resendEmail = require("./resendEmail");
const sendResetPasword = require("./sendResetPasword");
const resetPassword = require("./resetPassword");
const changePassword = require("./changePassword");

module.exports = {
  loginContrl,
  registerContrl,
  getCurrent,
  logOut,
  verify,
  resendEmail,
  sendResetPasword,
  resetPassword,
  changePassword
};
