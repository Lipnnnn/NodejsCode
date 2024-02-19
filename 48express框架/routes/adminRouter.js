/**
 * 这个文件作为后台的路由模块，写后台的路由规则
 */

// 1. 引入express
const express = require('express');

// 2. 创建路由对象
const router = express.Router();

// 3. 创建路由规则
router.get('/admin',(req,res)=>{
    res.send('后台页面');
})

// 4. 暴露router对象
module.exports = router;