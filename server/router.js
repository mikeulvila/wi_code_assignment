'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('./controllers/todos');

// GET all todos
router.get('/todos', ctrl.getTodos);

// POST new todo
router.post('/todos', ctrl.postTodo);

// DELETE todo
router.delete('/todos/:id', ctrl.deleteTodo);

// UPDATE todo
router.put('/todos/:id', ctrl.updateTodo);

module.exports = router;
