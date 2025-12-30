const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registerUserService = async (data) => {
  const { name, mobile, email, state, city } = data;

  if (!name || !mobile) {
    return {
      success: false,
      status: 400,
      message: 'Name and mobile number are required'
    };
  }

  const existingUser = await User.findOne({ mobile });
  if (existingUser) {
    return {
      success: false,
      status: 409,
      message: 'Mobile number already registered'
    };
  }

  const user = await User.create({
    name,
    mobile,
    email,
    state,
    city
  });

  // 🔐 GENERATE JWT TOKEN
  const token = jwt.sign(
    {
      userId: user._id,
      mobile: user.mobile
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return {
    success: true,
    status: 201,
    message: 'Registration successful',
    data: {
      token,
      user: {
        id: user._id,
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        state: user.state,
        city: user.city
      }
    }
  };
};
