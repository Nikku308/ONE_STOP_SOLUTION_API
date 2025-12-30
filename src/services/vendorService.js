const Vendor = require('../models/Vendor');

// 🔹 Get vendors by home service
exports.getVendorsByServiceService = async (serviceId) => {
  if (!serviceId) {
    return {
      success: false,
      status: 400,
      message: 'Service ID is required'
    };
  }

  const vendors = await Vendor.find({
    serviceId,
    status: true
  });

  return {
    success: true,
    status: 200,
    message: 'Vendors fetched successfully',
    data: vendors
  };
};
