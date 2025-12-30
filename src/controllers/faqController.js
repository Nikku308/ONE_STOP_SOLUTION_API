const faqService = require('../services/faqService');

/**
 * GET FAQs (Mobile App)
 */
exports.getFaqs = async (req, res) => {
  try {
    const faqs = await faqService.getFaqs();

    res.status(200).json({
      success: true,
      data: faqs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch FAQs'
    });
  }
};

/**
 * CREATE FAQ
 */
exports.createFaq = async (req, res) => {
  try {
    const faq = await faqService.createFaq(req.body);

    res.status(201).json({
      success: true,
      message: 'FAQ created successfully',
      data: faq
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create FAQ'
    });
  }
};
