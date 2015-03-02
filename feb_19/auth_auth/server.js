'use strict';

var express = require('express');
var mongoose = require('mongoose');
var notesRoutes = require('./routes/notes_routes');
var passport = require('passport');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/notesapp_development');

var app = express();
app.use(passport.initialize());
require('./lib/passport_strat')(passport);
var notesRouter = express.Router();
var userRoutes = express.Router();

notesRoutes(notesRouter)

require('./routes/user_routes')(userRoutes, passport);

app.use('/api/v1', notesRouter);
app.use('/api/v1', userRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening on port ' + (process.env.PORT || 3000));
});
