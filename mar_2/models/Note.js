'use strict';

var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
  noteBody: String,
  author: String
});

module.exports = mongoose.model('Note', noteSchema);
