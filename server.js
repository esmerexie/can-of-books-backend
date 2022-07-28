'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
app.use(cors());
const Book = require('./models/book.js')
app.use(express.json());

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

app.post('/book', (request, response, next) => {
  console.log(request.body);
  let {title, description, status} = request.body;
  if(!title || !description || !status){
    next('Bad request')
  }

  let book = new Book({
    title,
    description,
    status
  });
  book.save()
    .then(results => {
      response.send(results);
    })
    .catch(e => {
      next(e);
    })
})

app.delete('/book/:id', async (request, response, next) => {
  let id = request.params.id;
  try{
    await Book.deleteOne({_id: id});
    Book.find()
    .then(bookData => {
      response.send(bookData);
    });
  } catch(e){
    next(e);
  }
})

app.put('/book/:id', async (request, response, next) => {
  try{
    let {title, description, status} = request.body;
  if(!title || !description || !status){
    next('Bad request')
  }
  else{
    let id = request.params.id;
    await Book.findOneAndReplace(
      { _id: id },
      request.body,
      { returnDocument: 'after'}
    );
    Book.find()
    .then(bookData => {
      response.send(bookData);
    });
  }
  }
  catch (e){
    next(e);
  }
})

app.get('/book/:title/:description', (request, response, next) => {
  console.log(typeof request.params.title);
  console.log(request.params.description);
  console.log(request.params)
  response.send('Also working on it');
})

app.use((error, request, response, next) => {
  response.status(500).send(error);
})


app.listen(PORT, () => console.log(`listening on ${PORT}`));
