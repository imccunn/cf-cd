'use strict';

var Note = require('../models/Note');
var eat_auth = require('../lib/eat_auth');
var bodyparser = require('body-parser');

module.exports = function(app, appAuth) {

	app.get('/notes', eat_auth(appAuth), function(req, res) {
	  Note.find({}, function(err, data) {
	    if (err) return res.status(500).send({'msg': 'could not retrieve notes'});
	    res.json(data);
	  });
	});

	app.post('/notes', function(req, res) {
	  var newNote = new Note(req.body);
	  newNote.save(function(err, note) {
	    if (err) {
	      return res.status(500).send({'msg': 'could note save note'});
	    } else {
	      res.json(note);
	    }
	  });
	});

	app.put('/notes/:id', function(req, res) {
	  var updatedNote = req.body;
	  delete updatedNote._id;
	  Note.update({_id: req.params.id}, updatedNote, function(err) {
	    if (err) return res.status(500).send({'msg': 'could not update note'});
	    res.json(req.body);
	  });
	});
};
