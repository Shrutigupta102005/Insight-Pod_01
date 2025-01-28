import mongoose , {Types, Schema}from "mongoose";
const ObjectId = Types.ObjectId;
const quizSchema = new Schema({
  _id: { type: ObjectId, required: true },
  podcastId: { type: ObjectId, ref: Podcasts, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: { type: [String], required: true },
      correctAnswer: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});
const quizModel = mongoose.model("Quiz", quizSchema);
export default quizModel;