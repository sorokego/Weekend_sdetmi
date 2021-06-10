import mongoose from "mongoose";

const users = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  password: {
    type: Number,
    required: true,
  },
  roleId: {
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

const Users = mongoose.model("users", users);

export default Users;
