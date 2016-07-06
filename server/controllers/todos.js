'use strict';
//Model
const Todos = require('../models/Todo');

module.exports.getTodos = (req, res) => {
  res.send(['water the lawn', 'make coffee', 'eat brocolli']);
};
