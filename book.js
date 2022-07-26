'use strict'

const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;