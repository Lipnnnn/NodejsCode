var express = require('express');
var router = express.Router();
const db = require('../../dbs/db/db.js');
const AccountModel = require('../../dbs/models/AccountModel.js');
const moment = require('moment');

// 导入中间件，判断用户是否登录
const judgeLoginMiddleware = require('../../middlewares/judgeLoginMiddleware.js');

// 数据库连接成功之后再做以下操作：
db(()=>{
  // 记账本的首页列表
  router.get('/account',judgeLoginMiddleware, function(req, res, next) {
    // 从数据库中读取全部的账单信息
    AccountModel.find().sort({time: -1}).then((data,err)=>{
      if(err){
        console.log(err);
        res.status(500).send('数据查询失败');
        return;
      }
    // res.render()方法是渲染ejs模板的，list表示模板引擎的名字，也就是说在views文件夹下的list.ejs文件
    res.render('list',{accounts:data});
    });
  });

  // 添加记录页面
  router.get('/account/add',judgeLoginMiddleware, function(req, res, next) {
    res.render('add');
  });

  // 提交添加记录
  router.post('/account',judgeLoginMiddleware,(req,res,next)=>{
    AccountModel.create({
      title: req.body.title,
      time: req.body.time,
      type: req.body.type,
      account: req.body.account,
      remarks: req.body.remarks
    });
    res.render('success',{msg: '添加成功啦~~',url: '/account'});
  });

  // 删除
  router.get('/account/:id',judgeLoginMiddleware,(req,res,next)=>{
    // 从数据库中删除这条数据
    AccountModel.deleteOne({_id: `${req.params.id}`}).then((data,err)=>{
      if(err){
        res.status(500).send('删除失败');
        return;
      }
      res.render('success',{msg: '删除成功！',url: '/account'});
    });
  });

});

module.exports = router;
