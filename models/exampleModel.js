// exampleModel.js

const mongoose = require("mongoose");

// Schema
const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

// Model
const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
