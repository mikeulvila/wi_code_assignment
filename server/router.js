'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('./controllers/todos');

// get all todos
router.get('/todos', ctrl.getTodos);

// create new todo
router.post('/todos', ctrl.postTodos);

module.exports = router;
