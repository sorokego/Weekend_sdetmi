import mongoose from "mongoose";

const services_tags = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  tagId: {
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

const ServicesTags = mongoose.model("services_tags", services_tags);

export default ServicesTags;
