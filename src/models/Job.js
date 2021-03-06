import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  salary: {
    type: Number
  },
  remote: {
    type: Boolean
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("jobs", JobSchema);
