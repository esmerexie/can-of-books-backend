'use strict';

const mongoose = require('mongoose');

//schema//

let bookSchema = new mongoose.Schema({
    name: String,
    type: String
});