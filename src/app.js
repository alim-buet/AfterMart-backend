const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Aftermart is up and running!');
});

module.exports = app;