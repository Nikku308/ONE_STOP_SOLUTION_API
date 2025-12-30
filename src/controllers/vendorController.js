const vendorService = require('../services/vendorService');

// 🔹 Vendors list (Air Conditioner Services)
exports.getVendorsByService = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const result =
      await vendorService.getVendorsByServiceService(serviceId);

    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
