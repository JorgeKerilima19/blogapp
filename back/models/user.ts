import mongoose, { Schema } from "mongoose";

interface User {
  username: string;
}

const UserSchema = new Schema<User & Record<string, any>>({
  username: { type: String, required: true, minlength: 4, unique: true },
  password: { type: String, required: true, minlength: 4, unique: true },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
