const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

// Vendors by home service
router.get('/homeservices/:serviceId/vendors', vendorController.getVendorsByService);

module.exports = router;
