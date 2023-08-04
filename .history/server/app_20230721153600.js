const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;
const {MONGOURI} = require('./');

mongoose.connect(MONGOURI);
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo yeah');
});

mongoose.connection.on('error', error => {
  console.log('err connecting', error);
});
