import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Check if MONGODB_URI is provided
        if (!process.env.MONGODB_URI) {
            console.log("⚠️  MONGODB_URI not found in environment variables");
            console.log("📝 Please set MONGODB_URI in your .env file to a valid MongoDB connection string");
            console.log("💡 For MongoDB Atlas: mongodb+srv://<username>:<password>@<cluster>.mongodb.net");
            process.exit(1);
        }

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("❌ MONGODB connection error:", error.message);
        console.log("\n🔧 Troubleshooting steps:");
        console.log("1. Ensure MongoDB server is running (if using local MongoDB)");
        console.log("2. Check your MONGODB_URI in .env file");
        console.log("3. For cloud MongoDB (Atlas), ensure your IP is whitelisted");
        console.log("4. Verify your username/password are correct");
        process.exit(1)
    }
}

export default connectDB