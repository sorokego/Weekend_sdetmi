import connectDB from "../../../src/middlewares/mongodb";
import Category from "../../../src/models/categories";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const categories = await Category.find();

        res.status(200).json(categories);
    } else {
        res.status(422).send("req_method_not_supported");
    }
};

export default connectDB(handler);
