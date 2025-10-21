import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let MONGO_DB_URL=process.env.MONGO_DB_URL

export const connectDB = async () => {
  try{
await mongoose.connect(MONGO_DB_URL);
console.log("Database Connected ")
}catch(error){
    console.log(error.message)
}
};