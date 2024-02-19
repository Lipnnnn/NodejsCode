var express = require('express');
var router = express.Router();
const db = require('../../dbs/db/db.js');
const UserModel = require('../../dbs/models/UserModel.js');
const md5 = require('md5');

// 数据库连接成功之后再做以上操作
db(()=>{
  // 设置路由规则
  // 显示注册页面
  router.get('/',(req,res)=>{
    res.render('reg');
  });

  // 实现注册功能
  router.post('/reg',(req,res)=>{
    // 获取到前端传过来的用户名和密码，存入到数据库中
    UserModel.create({
      username: req.body.username,
      password: md5(req.body.password)  // 使用md5对密码进行加密处理
    });
    res.render('success',{msg: '注册成功',url: '/account'});
  });

  // 显示登录页面
  router.get('/login',(req,res)=>{
    res.render('login');
  });

  // 实现登录功能
  router.post('/login',(req,res)=>{
    // 将前端输入的用户名和密码在数据库中进行查找，如果数据库中存在则登录成功
    UserModel.findOne({username: req.body.username,password: md5(req.body.password)}).then((data,err)=>{
      if(!data){
        // 如果data为null，则登录失败
        res.send('用户名或密码错误！');
        return;
      }

      // 登录成功，将用户信息存入session
      req.session.username = data.username;

      res.render('success',{msg: '登录成功', url: 'account'});
    });
  });

  // 退出登录功能
  router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
      // 退出登录后去到登录页面
      res.render('success',{msg: '退出成功',url: 'login'});
    })
  })

});

module.exports = router;
