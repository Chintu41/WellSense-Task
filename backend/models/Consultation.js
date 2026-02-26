const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  healthGoal: {
    type: String,
    required: [true, 'Health goal is required'],
    enum: [
      'Fat Loss / Weight Management',
      'Diabetes Reversal',
      'PCOD / PCOS & Thyroid',
      'Infertility Reversal',
      'Bone / Joint Health',
      'Hair & Skin Health',
      'Auto Immune Reversal',
      'Kids Nutrition',
      'Immunity Boosting',
      'Other'
    ],
  },
  message: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Consultation', consultationSchema);
