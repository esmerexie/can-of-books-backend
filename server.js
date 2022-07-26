'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./book.js')

mongoose.connect(process.env.DATABASE_URL);

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;


app.get('/books', (request, response) => {

  let {title, description, status} = request.query;
  let queryObject = {};

  if (title){
    queryObject.title = title;
  }
  if (description){
    queryObject.description = description;
  }
  if (status){
    queryObject.status = status;
  }

  Book.find(queryObject)
    .then(bookData => {
      response.send(bookData);
    });

});



app.listen(PORT, () => console.log(`listening on ${PORT}`));


// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Mongoose is connected');

// });

// });

