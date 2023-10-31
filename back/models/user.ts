import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
  password: string;
}

const UserSchema = new Schema<User>({
  username: { type: String, required: true, minlength: 4, unique: true },
  password: { type: String, required: true, minlength: 4 },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
