// adminRoutes.js

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Routes for admin panel
router.post("/login", adminController.login);
router.get("/users", adminController.getAllUsers);
router.get("/users/:id", adminController.getUserById);
router.put("/users/:id", adminController.updateUserById);
router.delete("/users/:id", adminController.deleteUserById);

module.exports = router;
