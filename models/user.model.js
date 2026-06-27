import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "moderator", "user"], default: "user" },
  avtar: String,
  refreshToken: String,
});

export const User = mongoose.model("User", userSchema);
