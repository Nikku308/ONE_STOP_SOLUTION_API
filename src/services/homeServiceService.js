const HomeService = require('../models/HomeService');

// 🔹 Get all home services
exports.getHomeServicesService = async () => {
  const services = await HomeService.find({ status: true }).sort({ name: 1 });

  return {
    success: true,
    status: 200,
    message: 'Home services fetched successfully',
    data: services
  };
};

// 🔹 Get most used home services
exports.getMostUsedHomeServicesService = async () => {
  const services = await HomeService.find({
    status: true,
    isMostUsed: true
  });

  return {
    success: true,
    status: 200,
    message: 'Most used home services fetched successfully',
    data: services
  };
};
