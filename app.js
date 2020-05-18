var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose")
// 连接数据库
mongoose
    .connect("mongodb://localhost:27017/yanshisan", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      console.log("数据库连接成功")
    })
    .catch(() => {
      console.log("数据库连接失败");
    })

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 允许跨域
app.use((req, res, next) => {
  res.header({
    'Access-Control-Allow-Origin': req.headers.origin || '*',
    // 'Access-Control-Allow-Headers':'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Content-Type': 'application/json; charset= utf-8'
  })
  // 发送post前,先发送options情趣,如果接收到,就才发送post
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next()
  }
})

const indexRouter = require(path.join(__dirname, './routes/index'))

app.use('/', indexRouter);


module.exports = app;
