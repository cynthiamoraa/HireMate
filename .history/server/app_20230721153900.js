const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
const {MONGOURI} = require('./env');

mongoose.connect(MONGOURI);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo yeah');
});

mongoose.connection.on('error', error => {
  console.log('err connecting', error);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
