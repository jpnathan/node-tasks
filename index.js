const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { task } = require('./src/route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
})

// API routes
app.use(
  task(),
);

app.listen(3000, (err) => {
  if(err) console.log(err);
  else console.log('Server turbinado na porta 3000');
});