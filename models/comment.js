import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    comment: String,
    threadId: String,
    authorComment: String,
    userCommentId: String,
  },
  {
    timestamp: true,
  }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
