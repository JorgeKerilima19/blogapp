import mongoose, { Schema, Document } from "mongoose";

export interface Post extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  summary: string;
  content: string;
  cover: string;
  author: mongoose.Types.ObjectId;
}

const PostSchema = new Schema<Post>(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    cover: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model<Post>("Post", PostSchema);

export default PostModel;
