import mongoose, { Schema } from "mongoose";
const leaderboardSchema = new Schema({
  _id: { type: ObjectId, required: true },
  userId: { type: ObjectId, ref: Users, required: true },
  points: { type: Number, default: 0 },
  rank: { type: Number },
  updatedAt: { type: Date, default: Date.now },
});
const leaderboardModel = mongoose.model("LeaderBoard", leaderboardSchema);
export default leaderboardModel;
