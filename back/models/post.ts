import mongoose, { Schema, Document } from "mongoose";

export interface Post extends Document {
  __id: mongoose.Types.ObjectId;
  title: string;
  summary: string;
  content: string;
  cover: string;
}

const PostSchema = new Schema<Post>(
  {
    title: { type: String, required: true, minlength: 4 },
    summary: { type: String, required: true, minlength: 10 },
    content: { type: String, required: true },
    cover: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model<Post>("Post", PostSchema);

export default PostModel;
