import mongoose from "mongoose";

export function connectMongo() {
  const URL = process.env.MONGO_URL;
  mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true
  });
}
