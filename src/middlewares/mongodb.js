import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
    Object.keys(mongoose.connection.models).forEach((key) => {
        delete mongoose.connection.models[key];
    });

    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }

    await mongoose.connect(process.env.mongodburl, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
    });

    mongoose.Promise = global.Promise;

    return handler(req, res);
};

export default connectDB;
