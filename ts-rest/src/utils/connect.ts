import mongoose from "mongoose";
import config from "config";
import log from "./logger";

const connectDB = async function () {
  const dbURI = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbURI);
    log.info("Connected to MONGODB database");
  } catch (error) {
    console.log("Failed to connect to MONGODB database");
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
