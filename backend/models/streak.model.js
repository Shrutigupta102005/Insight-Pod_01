import mongoose , {Types}from "mongoose";
const ObjectId = Types.ObjectId;
const streakSchema = new mongoose.Schema({
  _id: { type: ObjectId, required: true },
  userId: { type: ObjectId, ref: Users, required: true },
  date: { type: Date, default: Date.now },
  streak: { type: Number, default: 0 },
});
const streakModel = mongoose.model("Streak", streakSchema);
export default streakModel;
