import mongoose from "mongoose";
const podcastSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    tags: [String],
    description: { type: String },
    category: { type: String },
    url: { type: String, required: true },
    platform: { type: String }, // Example: YouTube, Spotify
    duration: { type: Number }, // Duration in seconds
    releaseDate: { type: Date },
    summary: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
const podcastModel = mongoose.model("Podcast", podcastSchema);
export default podcastModel;
