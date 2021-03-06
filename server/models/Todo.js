'use strict';
const mongoose = require('mongoose');

// define todo model
const todoSchema = new mongoose.Schema({
  todoItem: String,
  completed: Boolean
});

// create model class
const model = mongoose.model('todo', todoSchema);

// export model
module.exports = model;
