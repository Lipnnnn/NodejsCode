var express = require('express');
var router = express.Router();
const db = require('../../dbs/db/db.js');
const AccountModel = require('../../dbs/models/AccountModel.js');
const moment = require('moment');

// 数据库连接成功之后再做以下操作：
db(()=>{
  // 记账本的首页列表
  router.get('/account', function(req, res, next) {
    // 从数据库中读取全部的账单信息
    AccountModel.find().sort({time: -1}).then((data,err)=>{
        if(err){
            console.log(err);
            // 响应失败的提示
            res.json({
                code: '1001',
                msg: '读取失败',
                data: null
            });
            return;
        }
        // 响应成功的提示
        res.json({
            // 响应编码
            code: '0000',
            // 响应的信息
            msg: '读取成功',
            // 响应的数据
            data: data
        });
    });
  });

  // 提交添加记录
  router.post('/account',(req,res,next)=>{
    AccountModel.create({
        title: req.body.title,
        time: req.body.time,
        type: req.body.type,
        account: req.body.account,
        remarks: req.body.remarks
    }).then((data,err)=>{
        res.setHeader('Content-Type','application/json; charset=utf-8');
        if(err){
            console.log(err);
            res.json({
                "code": "1002",
                "msg": "添加失败",
                "data": null
            });
            return;
        }
        res.json({
            "code": "0000",
            "msg": "添加成功",
            "data": data
        });
    });
  });

  // 删除
  router.delete('/account/:id',(req,res,next)=>{
    // 从数据库中删除这条数据
    AccountModel.deleteOne({_id: `${req.params.id}`}).then((data,err)=>{
      if(err){
        res.json({
          code: '1003',
          msg: '删除失败',
          data: null
        })
        return;
      }
      res.json({
        code: '0000',
        msg: '删除成功',
        data: data
      })
    });
  });

  // 获取单条账单接口
  router.get('account/:id',(req,res,next)=>{
    // let {id} = req.params;
    // 从数据库中根据id查找该条数据
    AccountModel.findOne({_id: `${req.params.id}`}),then((data,err)=>{
      if(err){
        console.log(err);
        res.json({
          code: '1004',
          msg: '查找失败',
          data: null
        })
        return;
      }
      res.json({
        code: '0000',
        msg: '查找成功',
        data: data
      })
    })
  });

  // 更新账单信息
  router.patch('account/:id',(req,res,next)=>{
    let {id} = req.params;
    let {account} = req.body.account;
    console.log(id);
    AccountModel.updateOne({"_id": id},{"account": account}).then((data,err)=>{
      if(err){
        console.log(err);
        res.json({
          code: '1005',
          msg: '更新失败',
          data: null
        })
        return;
      }
      res.json({
        code: '0000',
        msg: '更新成功',
        data: data
      })
    })
  })

});

module.exports = router;
