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
      return res.status(500).json({message: err.message});
    }
    res.json({todo: todo, message: 'Todo item created'});
  });
}

module.exports.deleteTodo = (req, res) => {
  var query ={_id: req.params.id};
  Todos.remove(query, (err) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({ message: 'Todo item removed'});
  });
}
