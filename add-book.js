'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./book.js');

mongoose.connect(process.env.DATABASE_URL);

const title = process.argv[2];
const description = process.argv[3];
const status = process.argv[4];

let book = new Book({
  title,
  description,
  status
});

book.save().then(data => {
  console.log('book was added to the database', data);
});
