import mongoose from "mongoose";

export const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Successfully");
  } catch (err) {
    console.log("DB Connection Failed", err.message);
  }
};
