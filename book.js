'use strict';

const mongoose = require('mongoose');

let booksSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String

});

const Book = mongoose.model('Book', booksSchema)

module.exports = Book;