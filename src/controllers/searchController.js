const searchService = require('../services/searchService');

/**
 * SEARCH API (Mobile)
 */
exports.search = async (req, res) => {
  try {
    const { keyword, location } = req.query;

    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: 'Keyword is required'
      });
    }

    const results = await searchService.searchServices(
      keyword,
      location || 'your area'
    );

    res.status(200).json({
      success: true,
      data: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Search failed'
    });
  }
};

/**
 * RECENT SEARCHES
 */
exports.recentSearches = async (req, res) => {
  try {
    const userId = req.user?.id || null;

    const searches = await searchService.getRecentSearches(userId);

    res.status(200).json({
      success: true,
      data: searches
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recent searches'
    });
  }
};


/**
 * CREATE SEARCH (Mobile)
 */
exports.createSearch = async (req, res) => {
  try {
    const { keyword, location } = req.body;

    if (!keyword) {
      return res.status(400).json({
        success: false,
        message: 'Keyword is required'
      });
    }

    const search = await searchService.createSearch({
      userId: req.user?.id || null,
      keyword,
      location
    });

    res.status(201).json({
      success: true,
      message: 'Search saved',
      data: search
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to save search'
    });
  }
};
