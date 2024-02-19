/**
 * 这个文件作为前台路由模块，写前台的路由规则
 */

// 1. 导入express
const express = require('express');

// 2. 创建路由对象（这个router对象就相当于一个小的app对象）
const router = express.Router();

// 3. 创建路由规则
router.get('/home',(req,res)=>{
    res.send('前台主页');
})

// 4. 暴露router对象
module.exports = router;