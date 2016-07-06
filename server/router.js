'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('./controllers/todos');

// GET all todos
router.get('/todos', ctrl.getTodos);

// POST new todo
router.post('/todos', ctrl.postTodos);

// DELETE todo
router.delete('/todos/:id', ctrl.deleteTodo);

module.exports = router;
