import mongoose, { Schema } from "mongoose";

const threadSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    authorEmail: String,
    userId: String,
  },
  {
    timestamp: true,
  }
);

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
