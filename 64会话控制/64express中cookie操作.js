/**
 * express中cookie操作：
 * 1. 添加cookie:
 *    res.cookie('name','zhangsan',{maxAge: 60*1000});
 *    maxAge的单位是ms，60*1000表示一分钟
 * 
 * 2. 删除cookie:
 *    res.clearCookie('name');
 * 
 * 3. 获取cookie:
 *    ① const cookieParser = require('cookie-parser');
 *    ② app.use(cookieParser());
 *    ③ console.log(req.cookies.name);
 * 
 */

// 导入express
const express = require('express');
const cookieParser = require('cookie-parser');

// 创建应用对象
const app = express();
app.use(cookieParser());

// 创建路由规则
// 添加cookie
app.get('/set-cookie',(req,res)=>{
    // res.cookie('name','zhangsan');  // 这种方式设置的cookie在浏览器关闭之后，就会删除该条cookie信息

    res.cookie('name','zhangsan',{maxAge: 60*1000});  // 设置该条cookie的存活时间为一分钟

    res.send('home');
});

// 删除cookie
app.get('/remove-cookie',(req,res)=>{
    res.clearCookie('name');  // 删除键名为name的cookie
    res.send('delete');
});

// 获取cookie
app.get('/get-cookie',(req,res)=>{
    console.log(req.cookies);
    res.send(`欢迎您：${req.cookies.name}`);
})

// 监听端口，启动服务
app.listen(3000,()=>{
    console.log('服务启动成功64...');
})

