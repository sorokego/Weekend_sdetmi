import connectDB from "../../src/middlewares/mongodb.js";
import Service from "../../src/models/services.js";
import mongoose from "mongoose";

const handler = async (req, res) => {
    switch (req.method) {
        case "GET": {
            const { categoryId } = req.query ?? null;
            const services = await Service.aggregate([
                {
                    $lookup: {
                        from: "images",
                        localField: "images",
                        foreignField: "_id",
                        as: "images",
                    },
                },
                {
                    $match: {
                        categoryId: new mongoose.Types.ObjectId(categoryId),
                    },
                },
            ]);
            res.json(services);
            break;
        }
        default: {
            res.status(422).send("req_method_not_supported");
            return resolve();
        }
    }
};

export default connectDB(handler);
