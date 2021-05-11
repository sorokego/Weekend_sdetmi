import connectDB from "../../../src/middlewares/mongodb";
import Subcategory from "../../../src/models/subcategories";

const handler = async (req, res) => {
    if (req.method === "GET") {
        const subcategories = await Subcategory.find();

        res.status(200).json(subcategories);
    } else {
        res.status(422).send("req_method_not_supported");
    }
};

export default connectDB(handler);
