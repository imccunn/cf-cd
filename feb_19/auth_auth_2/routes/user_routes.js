'use strict';

var bodyparser = require('body-parser');
var User = require('../models/User');

module.exports = function(app, passport, appSecret) {
  app.use(bodyparser.json());
  app.post('/create_user', function(req, res) {
    var newUser = new User();
    newUser.basic.email = req.body.email;
    newUser.basic.password = newUser.generateHash(req.body.password);
    newUser.save(function(err, data) {
      if (err) return res.status(500).send({msg: 'could not create user'});

      res.json({msg: 'user created!'});
    });
  });

  app.get('/sign_in', passport.authenticate('basic', {session: false}), function(req, res) {
    res.json({msg: 'authenticated'});
  });
};
