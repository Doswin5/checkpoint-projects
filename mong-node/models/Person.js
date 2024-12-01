const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the Person schema
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String], // Array of strings
});

// Create and export the model
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
