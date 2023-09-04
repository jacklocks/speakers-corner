import mongoose, { Schema } from "mongoose";

const threadSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamp: true,
  }
);

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
