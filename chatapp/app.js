'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./test.db");

db.serialize(() => {
    db.run("drop table if exists users");
    db.run("drop table if exists messages");
    db.run("create table if not exists users(id integer primary key,name,position)");
    db.run("create table if not exists messages(id integer primary key, user_id integer,original_content,convert_content,datetime timestamp,username_to)");
    db.run("insert into users(name,position) values(?,?)", "佐藤", "上司");
    db.run("insert into users(name,position) values(?,?)", "田中", "部下");
    // db.run("insert into messages(user_id,original_content,convert_content,datetime,username_to) values(?,?,?,?,?)", 1, "こんにちは", "お世話になっております", new Date(), "田中");
});

module.exports.db = db;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

db.close();

module.exports = app;