const homeServiceService = require('../services/homeServiceService');

// 🔹 Home services
exports.getHomeServices = async (req, res) => {
  try {
    const result = await homeServiceService.getHomeServicesService();
    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// 🔹 Most used home services
exports.getMostUsedHomeServices = async (req, res) => {
  try {
    const result =
      await homeServiceService.getMostUsedHomeServicesService();
    return res.status(result.status).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
