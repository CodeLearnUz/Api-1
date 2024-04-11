// exampleService.js

// Dependencies
const ExampleModel = require("../models/exampleModel");

// Create a new example record
const createExample = async (data) => {
  try {
    const example = new ExampleModel(data);
    const savedExample = await example.save();
    return savedExample;
  } catch (error) {
    throw error;
  }
};

// Get all examples
const getAllExamples = async () => {
  try {
    const examples = await ExampleModel.find();
    return examples;
  } catch (error) {
    throw error;
  }
};

// Get example by ID
const getExampleById = async (id) => {
  try {
    const example = await ExampleModel.findById(id);
    return example;
  } catch (error) {
    throw error;
  }
};

// Update example by ID
const updateExampleById = async (id, data) => {
  try {
    const updatedExample = await ExampleModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedExample;
  } catch (error) {
    throw error;
  }
};

// Delete example by ID
const deleteExampleById = async (id) => {
  try {
    await ExampleModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createExample,
  getAllExamples,
  getExampleById,
  updateExampleById,
  deleteExampleById,
};
