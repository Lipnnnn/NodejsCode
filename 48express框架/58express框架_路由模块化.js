/**
 * 路由模块化：
 * 将路由规则分成多个文件，而不是全部写在同一个文件里面
 * 路由规则就是指app.get()/app.post()等等这些。
 * 
 * 此文件作为主文件，routes文件夹中的两个文件作为路由模块文件
 * 
 * 在主文件中需要：
 * 1. 引入模块
 * 2. 使用模块
 * 
 */

const express = require('express');

// 引入前台路由模块
const homeRouter = require('./routes/homeRouter');
// 引入后台路由模块
const adminRouter = require('./routes/adminRouter');

const app = express();

// 使用前台路由模块
app.use(homeRouter);
// 使用后台路由模块
app.use(adminRouter);

app.get('*',(req,res)=>{
    res.send('<h1>404 Not Found</h1>')
})

app.listen(9000,()=>{
    console.log('服务启动成功58...');
})