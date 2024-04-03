const express = require('express');
const app = express();

app.use((req, res) => {
  res.status(200).json({
    message: 'app.js file code is running',
    status: 'true'
  });
});

module.exports = app;