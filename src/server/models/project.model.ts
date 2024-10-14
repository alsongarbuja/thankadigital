import mongoose from "mongoose";

export interface IProjectScheme extends mongoose.Document {
  name: string;
  slug: string;
  thumbnail: string;
  liveLink: string | null;
  githubLink: string | null;

  details: string;
  tags: string[];

  summary: string;

  status: "published" | "draft" | "archieved";
}

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  slug: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  thumbnail: {
    type: String,
    trim: true,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String || null,
    default: null,
  },
  githubLink: {
    type: String || null,
    default: null,
  },
  details: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["published", "draft", "archieved"],
    default: "draft",
  },
}, { timestamps: true });

export default mongoose.models.Project ||
  (mongoose.model(
    "Project",
    ProjectSchema
  ) as unknown as mongoose.Model<IProjectScheme>);

// TODO: Add unique slug on project create
