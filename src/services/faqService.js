const Faq = require('../models/Faq');

/**
 * Get active FAQs
 */
exports.getFaqs = async () => {
  return await Faq.find({ status: true })
    .sort({ createdAt: -1 })
    .select('question answer');
};

/**
 * Create FAQ (Admin)
 */
exports.createFaq = async (data) => {
  return await Faq.create(data);
};
