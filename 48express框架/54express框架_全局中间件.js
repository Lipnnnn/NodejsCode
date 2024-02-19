/**
 * 全局中间件：
 * 案例需求：记录每个请求的 时间 和 url 和 ip地址
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 定义一个中间件函数
function fun(req,res,next){  // next是一个回调函数，用于执行这个fun函数之后的代码
    // 获取到前端传过来的 时间 url ip
    let date = new Date();
    let {url,ip} = req;
    
    // 将这三个数据存入.log文件中
    fs.appendFileSync(path.resolve(__dirname,'./access.log'),`\r\n${date},${url},${ip}`);

    // 调用next()继续执行后面的代码
    next();
}

// 使用中间件函数
app.use(fun);

app.get('/home',(req,res)=>{
    res.send('前台页面');
})

app.get('/admin',(req,res)=>{
    res.send('后台页面');
})

app.get('*',(req,res)=>{
    res.send('404 Not Found');
})

app.listen(9000,()=>{
    console.log('服务启动成功54...');
})