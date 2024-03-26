import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    name: String,
    time: Date,
    status: String,
    // foreign key
    organizerEmail: String,
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("Event", eventSchema);
