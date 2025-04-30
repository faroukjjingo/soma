import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  action: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Analytics', analyticsSchema);
