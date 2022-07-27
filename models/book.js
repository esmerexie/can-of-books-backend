'use strict'

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

let bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;