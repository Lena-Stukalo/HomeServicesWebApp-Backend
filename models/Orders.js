const { Schema, model } = require("mongoose");
const { hendleSave } = require("../helpers");
const Joi = require("joi");

const contactSchma = new Schema(
  {
    order: {
      type: String,
      required: [true, "Set order name"],
    },
    description: {
      type: String,
      required: [true, "Set order description"],
    },
    client_name: {
      type: String,
      required: [true, "Set client name for order"],
    },
    client_email: {
      type: String,
    },
    client_phone: {
      type: String,
    },
    date: {
      type: String,
    },
    sum: {
      type: Number,
      required: [true, "Set sum for order"],
    },
    done: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
const addSchema = Joi.object({
  client_name: Joi.string().required(),
  client_email: Joi.string().required(),
  client_phone: Joi.string().required(),
  order: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().required(),
  sum: Joi.number().required(),
  done: Joi.boolean(),
});

const schemas = {
  addSchema,
};
contactSchma.post("save", hendleSave);
const Order = model("order", contactSchma);

module.exports = { Order, schemas };
