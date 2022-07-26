'use strict';

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require('./book.js');

const intLibrary =
  [
    {
      title: 'swerve',
      description: 'On Nature was written in ancient Greece and was almost lost. However, a humanist book finder discovers the hidden knowledge found in the book. The contents changed the course of human events after this point.',
      status: 'read'
    },
    {
      title: 'the history of western philosophy',
      description: 'An overview of the major philosophical currents that have influenced the way europe developed culturally, technologically, and ideologically. Philosophers and mathematicians are discussed from periods ranging from 500 BC to 1960 AD.',
      status: 'read'
    },
    {
      title: 'being mortal',
      description: 'analysis on how society considers death and loss. The author discusses the current state of the medical field and current practices. In addition, the author introduces suggestions of how to improve the statue quo.',
      status: 'read'
    },
    {
      title: 'cracking the coding interview',
      description: 'In depth discussion of the major strategies that an interviewee should use to excel at the interview. In addition, there are many examples offered and practice problems.',
      status: 'unread'
    }
  ]

async function seed() {
  for (const book of intLibrary) {
    await Book.create(book);
  }

  console.log('your books have been added');
  mongoose.disconnect();
}

seed();