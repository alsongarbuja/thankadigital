import mongoose from "mongoose";

export interface ICareerScheme extends mongoose.Document {
  identifier: string;
  title: string;
  description: string;
  salary: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
  type: 'Full Time' | 'Part Time' | 'Internship' | 'Contract Based';
  experience: string;
  skills: string[];
  time: string;
  status: "published" | "draft" | "archieved";
}

const CareerSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    enum: ["Remote", "On-site", "Hybrid"],
    required: true,
  },
  type: {
    type: String,
    enum: ["Full Time", "Part Time", "Internship", "Contract Based"],
    required: true,
  },
  time: {
    type: String,
    default: "",
  },
  experience: {
    type: String,
    default: "",
  },
  skills: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["published", "draft", "archieved"],
    default: "draft",
  },
}, { timestamps: true });

export default mongoose.models.Career ||
  (mongoose.model(
    "Career",
    CareerSchema
  ) as unknown as mongoose.Model<ICareerScheme>);
