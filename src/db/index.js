import "dotenv/config"
import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    console.log("Database is connected");
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1)
  }
}
