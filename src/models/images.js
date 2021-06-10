import mongoose from "mongoose";

const image = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    serviceId: {
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

const Image = mongoose.model("images", image);

export default Image;
