const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
    },
    keyword: {
      type: String,
      required: true
    },
    location: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('SearchHistory', searchHistorySchema);
