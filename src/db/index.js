// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//        const connectionInstance = await mongoose.connect(`{process.env.MONGODB_URI}/${DB_NAME}`)
//        console.log(`\n MongoDB connected !! DB HOST: $
//         {connectionInstance.connection.host}`)
//     } catch (error) {
//         console.log("MONGODB connection error", error);
//         process.exit(1)
//     }
// }
// export default connectDB

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
