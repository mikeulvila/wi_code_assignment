'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('./controllers/todos');

// GET all todos
router.get('/api/todos', ctrl.getTodos);

// POST new todo
router.post('/api/todos', ctrl.postTodo);

// DELETE todo
router.delete('/api/todos/:id', ctrl.deleteTodo);

// UPDATE todo
router.put('/api/todos/:id', ctrl.updateTodo);

module.exports = router;
