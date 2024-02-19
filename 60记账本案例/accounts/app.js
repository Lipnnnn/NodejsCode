var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 导入express-session
const session = require('express-session');
// 导入数据库的连接，将session的信息存入到数据库中
const MongoStore = require('connect-mongo');

let {DBHOST,DBPORT,DBNAME} = require('./dbs/config/config');

var indexRouter = require('./routes/web/index');
var accountRouter = require('./routes/api/account');
var userRouter = require('./routes/web/user');

var app = express();

// 设置session中间件
app.use(session({
  name: 'sid',  // 设置cookie的name，默认值是：connect.sid
  secret: 'auguigu',  // 参与加密的字符串（又称签名）
  saveUninitialized: false,  // 是否为每次请求都设置一个cookie用来存储session的id
  resave: true,  // 是否在每次请求时重新保存session
  store: MongoStore.create({
      mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`  // 数据库的连接配置
  }),
  cookie: {
      httpOnly: true,  // 设置为true表示，前端无法通过document.cookie来操作cookie
      maxAge: 1000*60*60*24*7  // 控制seesionID的过期时间
  }
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 路由规则
app.use('/', indexRouter);
app.use('/api',accountRouter);
app.use('/',userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 响应404页面
  res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
