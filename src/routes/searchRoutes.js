const express = require('express');
const router = express.Router();

const searchController = require('../controllers/searchController');

router.get('/', searchController.search);
router.get('/recent', searchController.recentSearches);

// ✅ Create search
router.post('/', searchController.createSearch);
module.exports = router;
