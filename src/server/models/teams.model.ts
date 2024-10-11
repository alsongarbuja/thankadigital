import mongoose from "mongoose";

export interface ITeamScheme extends mongoose.Document {
  name: string;
  position: string;
  imageUrl: string;
  team: 'Core' | 'Members';
}

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  position: {
    type: String,
    trim: true,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    enum: ["Core", "Members"],
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Team ||
  (mongoose.model(
    "Team",
    TeamSchema
  ) as unknown as mongoose.Model<ITeamScheme>);
