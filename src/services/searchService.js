const HomeService = require('../models/HomeService');
const SearchHistory = require('../models/SearchHistory');

/**
 * Search services
 */
exports.searchServices = async (keyword, location) => {
  const query = {
    status: true,
    name: { $regex: keyword, $options: 'i' }
  };

  const services = await HomeService.find(query).select('name');

  return services.map(service => ({
    text: `${service.name} in ${location}`
  }));
};

/**
 * Save search history
 */
exports.saveSearch = async (data) => {
  return await SearchHistory.create(data);
};

/**
 * Get recent searches
 */
exports.getRecentSearches = async (userId) => {
  return await SearchHistory.find({ userId })
    .sort({ createdAt: -1 })
    .limit(5)
    .select('keyword location');
};
exports.createSearch = async (data) => {
  return await SearchHistory.create(data);
};