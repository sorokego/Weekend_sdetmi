import mongoose from "mongoose";

const category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://www.freeiconspng.com/uploads/no-image-icon-11.PNG",
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

const Category = mongoose.model("categories", category);

export default Category;
