'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./book.js');

mongoose.connect(process.env.DATABASE_URL);

const title = process.argv[1];
const description = process.argv[2];
const status = process.argv[3];

let book = new Book({
    title,
    description,
    status,
});

try {
    book.save().then(data => {
        console.log('Book has been created!', data);
        mongoose.disconnect();
    });
} catch(e) {
    console.error("Something under the hood broke!", e);
}