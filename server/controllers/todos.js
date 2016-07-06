'use strict';
//Model
const Todos = require('../models/Todo');

module.exports.getTodos = (req, res) => {
  Todos.find({}, (err, todos) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.json({todos: todos});
  });
}

module.exports.postTodos = (req, res) => {
  const todo = req.body;
  Todos.create(todo, (err, todo) => {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({todo: todo, message: 'Todo created.'});
  });
}

