'use strict';

const mongoose = require('mongoose');

let booksSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String

});

const Book = mongoose.model('book', booksSchema)

module.exports = Book;