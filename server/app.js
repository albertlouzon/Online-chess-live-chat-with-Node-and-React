var express = require('express');
var logger = require('morgan');
var cors = require('cors');
var path = require('path')

var authRouter = require('./routes/auth');
var gameRouter = require('./routes/games');

var app = express();
app.use(express.static(path.join(__dirname, 'react-ui/src')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/auth', authRouter);
app.use('/games', gameRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/react-ui/public/index.html'));
  });


module.exports = app;
