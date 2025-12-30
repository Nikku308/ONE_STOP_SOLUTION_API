const mongoose = require('mongoose');


const homeServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    isMostUsed: {
      type: Boolean,
      default: false
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('HomeService', homeServiceSchema);
