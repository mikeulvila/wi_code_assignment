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

module.exports.postTodo = (req, res) => {
  const todo = req.body;
  Todos.create(todo, (err, todo) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    // wrap todo as array
    res.json({ todos: todo});

  });
}

module.exports.deleteTodo = (req, res) => {
  const query ={_id: req.params.id};
  Todos.remove(query, (err) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.json({ message: 'Todo item removed'});

  });
}

module.exports.updateTodo = (req, res) => {
  const query ={_id: req.params.id};
  Todos.findOneAndUpdate(query, req.body, {new: true}, (err, todo) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.json({ message: 'Todo item updated'});

  });
}
