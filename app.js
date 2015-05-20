'use strict';
/**
 * Module dependencies.
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var routes = require('./routes');
var config = require('./config/dev');

// 数据库
require('./models');

// body解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 日志配置
app.use(morgan());

// 路由配置
app.use('/', cors(), routes);

// 服务器启动
app.listen(config.port);

console.log('HTTP Server is running at port %s.', config.port);