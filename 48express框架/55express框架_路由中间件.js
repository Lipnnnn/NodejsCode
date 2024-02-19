/**
 * 路由中间件：
 * 案例需求：针对 /admin /setting 的请求，要求 url 携带 code=521 参数，如未携带提示【暗号错误】
 * 
 */

const express = require('express');

const app = express();

// 定义一个中间件函数
function fun(req,res,next){
    let text = req.query.code;
    if(text === '521'){
        next();
    }else{
        res.send('暗号错误');
    }
}

// 使用路由中间件：写在app.get()方法中间
app.get('/admin',fun,(req,res)=>{
    res.send('后台页面');
})

app.get('/setting',fun,(req,res)=>{
    res.send('设置页面');
})

app.listen(9000,()=>{
    console.log('服务启动成功55...');
})