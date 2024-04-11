// exampleController.js

const Example = require("../models/exampleModel");
const exampleService = require("../services/exampleService");

// Create a new example record
const createExample = async (req, res) => {
  try {
    const example = await exampleService.createExample(req.body);
    res.status(201).json(example);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all examples
const getAllExamples = async (req, res) => {
  try {
    const examples = await exampleService.getAllExamples();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get example by ID
const getExampleById = async (req, res) => {
  try {
    const example = await exampleService.getExampleById(req.params.id);
    res.json(example);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update example by ID
const updateExampleById = async (req, res) => {
  try {
    const example = await exampleService.updateExampleById(
      req.params.id,
      req.body
    );
    res.json(example);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete example by ID
const deleteExampleById = async (req, res) => {
  try {
    await exampleService.deleteExampleById(req.params.id);
    res.json({ message: "Example deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createExample,
  getAllExamples,
  getExampleById,
  updateExampleById,
  deleteExampleById,
};
