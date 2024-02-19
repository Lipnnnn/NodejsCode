// 1. 初始化包【npm init】

// 2. 安装express：【npm i express】

// 3. 引入 express 包
const express = require('express');

// 4. 创建应用对象
const app = express();

// 5. 创建路由
app.get('/home',(req,res)=>{
    res.end('hello express');
});

// 6.监听端口，启动服务
app.listen(9000,()=>{
    console.log('服务启动成功，48express初体验...');
})