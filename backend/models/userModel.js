import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: String,
    role: String,
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
