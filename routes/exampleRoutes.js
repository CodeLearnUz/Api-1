// exampleRoutes.js

const express = require("express");
const router = express.Router();
const exampleController = require("../controllers/exampleController");

// Routes for examples
router.post("/", exampleController.createExample);
router.get("/", exampleController.getAllExamples);
router.get("/:id", exampleController.getExampleById);
router.put("/:id", exampleController.updateExampleById);
router.delete("/:id", exampleController.deleteExampleById);

module.exports = router;
