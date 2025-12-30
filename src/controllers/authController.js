const authService = require('../services/authServices');

exports.login = async (req, res) => {
  try {
    const result = await authService.loginService(req.body);

    return res.status(result.status).json({
      success: result.success,
      message: result.message,
      data: result.data || null
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
