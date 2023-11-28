import mongoose from "mongoose";

interface IBlogScheme extends mongoose.Document {
  title: string;
  summary: string;
  author: {
    name: string;
    link: string;
  };
  tags: string[];
  body: {
    time: number;
    blocks: dynamicObject[];
    version: string;
  };
}

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  summary: {
    type: String, 
    trim: true,
    required: true,
  },
  body: {
    type: {
      time: Number,
      blocks: [mongoose.Schema.Types.Mixed],
      version: String,
    },
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  author: {
    type: {
      name: String,
      link: String,
    },
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Blog ||
  (mongoose.model(
    "Blog",
    BlogSchema
  ) as unknown as mongoose.Model<IBlogScheme>);