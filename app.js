require('dotenv').config();
const express = require('express');
const path = require('path');
const cookie_parser = require('cookie-parser');

// middlewares
const { run_scheduler } = require('./middleware/scheduler');

// routes
const index_router = require('./routes/index');
const login_router = require('./routes/login');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookie_parser());

app.use('/', index_router);
app.use(login_router);

run_scheduler();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err, status: err.status });
});

module.exports = app;
