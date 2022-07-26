'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
app.use(cors());
const Book = require('./book.js')

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

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