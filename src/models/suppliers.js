import mongoose from "mongoose";

const suppliers = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  deletedAt: {
    type: Date || null,
    default: null,
  },
});

mongoose.models = {};

const Suppliers = mongoose.model("suppliers", suppliers);

export default Suppliers;
