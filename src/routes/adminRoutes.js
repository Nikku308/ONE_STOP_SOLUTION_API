const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authmiddleware');

// All routes require admin authentication
router.use(protect, authorize('admin'));


module.exports = router;