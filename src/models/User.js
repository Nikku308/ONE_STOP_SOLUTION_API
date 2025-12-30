const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      sparse: true
    },
    state: String,
    city: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
