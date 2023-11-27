import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  accessToken: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Token || mongoose.model('Token', TokenSchema);