const express = require('express');
const router = express.Router();
const homeServiceController = require('../controllers/homeServiceController');

// All home services
router.get('/homeservices', homeServiceController.getHomeServices);

// Most used home services
router.get('/homeservices/most-used', homeServiceController.getMostUsedHomeServices);

module.exports = router;
