import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  moderatorEmail: String,
  time: Date,
  data: String,
});

const eventSchema = mongoose.Schema(
  {
    name: String,
    time: Date,
    status: String,
    comments: [commentSchema],
    // foreign key
    organizerEmail: String,
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("Event", eventSchema);
