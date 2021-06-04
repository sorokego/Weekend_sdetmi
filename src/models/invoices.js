import mongoose from "mongoose";

const image = new mongoose.Schema({
    name: {
        type: String,
        dafault: "",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    status: {
        type: String,
        default: "new",
    },
    phone: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    persons: {
        type: Number,
        required: true,
    },
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    email: {
        type: String,
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

const Image = mongoose.model("images", image);

export default Image;
