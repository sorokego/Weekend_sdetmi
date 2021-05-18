import mongoose from "mongoose";

const services_address = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

mongoose.models = {};

const ServicesAddress = mongoose.model("services_addresses", services_address);

export default ServicesAddress;
