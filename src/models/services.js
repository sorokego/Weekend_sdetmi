import mongoose from "mongoose";

const service = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG",
    },
    content: {
        type: String,
        default: "new",
    },
    description: {
        type: String,
        default: "",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    rate: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    categoryId: {
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
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    worktime: {
        type: String,
        default: "",
    },
    limits: {
        type: String,
        default: "",
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
});

mongoose.models = {};

const Service = mongoose.model("services", service);

export default Service;
