var express = require('express');
var router = express.Router();
// Require mysql2
const mysql = require('mysql2');
// Require models
const models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Add delete() route
router.delete("/actors/:id", function (req, res, next) {
  let actorId = parseInt(req.params.id);
  models.actor
    .destroy({
      where: { actor_id: actorId }
    })
    .then(result => res.redirect('/actors'))
    .catch(err => {
      res.status(400);
      res.send("There was a problem deleting the actor. Please make sure you are specifying the correct id.");
    }
);
});

module.exports = router;
