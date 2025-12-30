const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginService = async (data) => {
  const { mobile, password } = data;

  if (!mobile || !password) {
    return {
      success: false,
      status: 400,
      message: 'Mobile and password are required'
    };
  }

  const user = await User.findOne({ mobile });
  if (!user) {
    return {
      success: false,
      status: 401,
      message: 'Invalid mobile or password'
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return {
      success: false,
      status: 401,
      message: 'Invalid mobile or password'
    };
  }

  // 🔐 Generate JWT
  const token = jwt.sign(
    { userId: user._id, mobile: user.mobile },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return {
    success: true,
    status: 200,
    message: 'Login successful',
    data: {
      token,
      user: {
        id: user._id,
        name: user.name,
        mobile: user.mobile,
        email: user.email
      }
    }
  };
};
