const express = require('express');
const router = express.Router();

const faqController = require('../controllers/faqController');

// Mobile API
router.get('/', faqController.getFaqs);

// Admin API
router.post('/', faqController.createFaq);

module.exports = router;
