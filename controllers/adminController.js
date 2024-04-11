// adminController.js

// Dependencies
const adminService = require("../services/adminService");

// Login admin
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await adminService.login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await adminService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await adminService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user by ID
const updateUserById = async (req, res) => {
  try {
    const user = await adminService.updateUserById(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    await adminService.deleteUserById(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  login,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
