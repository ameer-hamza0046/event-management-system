import mongoose from "mongoose";

const participationSchema = mongoose.Schema(
  {
    eventId: mongoose.ObjectId,
    participantEmail: String,
  },
  {
    timestamps: true,
  }
);

export const Participation = mongoose.model(
  "Participation",
  participationSchema
);
