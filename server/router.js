'use strict';
const express = require('express');
const router = express.Router();
const ctrl = require('./controllers/todos');

router.get('/todos', ctrl.getTodos);

module.exports = router;
