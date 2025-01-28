import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    preferences: { type: [String], default: [""] },
    streak: { type: Number, default: 0 },
    watchLater: { type: [ObjectId], ref: Podcasts, default: [] },
    totalPoints: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
