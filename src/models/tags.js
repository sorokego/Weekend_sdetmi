import mongoose from "mongoose";

const tags = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  groupId: {
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
  deletedAt: {
    type: Date || null,
    default: null,
  },
});

mongoose.models = {};

const Tags = mongoose.model("tags", tags);

export default Tags;
