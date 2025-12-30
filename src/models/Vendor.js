const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema(
  {
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HomeService',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String, // banner image
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Vendor', vendorSchema);
