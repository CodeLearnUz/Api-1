// userService.js

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const config = require("../config/config");

// Function to authenticate user
const login = async (username, password) => {
  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, config.jwtSecret, {
      expiresIn: "1h",
    });
    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
};
