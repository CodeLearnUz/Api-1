// adminService.js

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel");
const config = require("../config/config");

// Function to authenticate admin
const login = async (username, password) => {
  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      throw new Error("Admin not found");
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    // Generate JWT token
    const token = jwt.sign({ id: admin._id }, config.jwtSecret, {
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
