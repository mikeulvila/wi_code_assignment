// entry point for server
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// App Setup
  // middleware
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));

  // routes
app.use('/', router);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port: ', port);

// DB connection
// wrap listen in mongoose callback to make sure mongo is connected
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/react-todo');
mongoose.connection.on('open', (err) => {
  if (err) throw err;
  // we're connected to database
  console.log('MongoDB connected!');
  //start server
  server.listen(port);
});
