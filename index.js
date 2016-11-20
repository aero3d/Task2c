var express = require('express');
var cors = require('cors');


var task2c = require('./task2c');

var app = express();

app.use(cors());

app.use('/task2c', task2c);

app.get('/', (req, res) => {
  res.send(`<a href="/task2c/?username=telegram.me/sobchak">Task 2C</a>`);
});

app.listen(3000, function() {
  console.log('MY_APP TACK2C listening PORT 3000!!!');
});
