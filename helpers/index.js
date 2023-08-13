const RequestError = require("./RequestError");
const cntrlWrapper = require("./cntrlWrapper");
const hendleSave = require("./handleSave");
const sendMail = require("./sendMail");
const createVerifyEmail = require("./createEmail");
module.exports = {
  RequestError,
  cntrlWrapper,
  hendleSave,
  sendMail,
  createVerifyEmail,
};
