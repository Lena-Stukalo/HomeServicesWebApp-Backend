const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { hendleSave } = require("../helpers");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: { type: String },
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);
const registerSchems = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email(),
  name: Joi.string().required(),
});
const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email(),
});
const EmailSchema = Joi.object({
  email: Joi.string().email().required(),
});
const PasswordSchema = Joi.object({
  password: Joi.string().required(),
});
userSchema.post("save", hendleSave);
const User = model("user", userSchema);

const schemas = {
  registerSchems,
  loginSchema,
  EmailSchema,
  PasswordSchema,
};
module.exports = {
  User,
  schemas,
};
