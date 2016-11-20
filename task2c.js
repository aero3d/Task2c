/**
 * Created by aero on 14.11.16.
 */
var router = require('express').Router();

router.use('/', (req, res, next) => {
  var username = "";
  var match = (req.query.username || username).match(/(?:(?:https?:)?(?:\/\/)?(?:www\.)?(?:[\w_\-0-9]*)\.(?:[^\/]{2,})\/)?(?:@)?([^\?\/]*)/i);
  console.log(req.query.username)
  console.log(match)
  if (match) {
    username = match[1]
  }
  req.username = username? `@${username}`: "Invalid username";
  next();
});


router.get('/', (req, res) => {
  res.send(req.username);
});

module.exports = router;
