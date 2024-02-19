/**
 * 获取请求体：
 * 需要用到一个叫【body-parser】的中间件
 * 
 * 1. 安装body-parser：【npm i body-parser】
 * 2. 引入body-parser：【require('body-parser')】
 * 3. 引入两个方法：
 *    【const jsonParser = bodyParser.json();】
 *    【const urlencodedParser = bodyParser.urlencoded({extended: false});】
 * 4. 通过路由中间件获取请求体
 * 
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 解析 JSON 格式的请求体的中间件
const jsonParser = bodyParser.json();

// 解析 querystring 格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({extended: false});

// 创建路由规则
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/57login.html');
})

app.post('/login',urlencodedParser,(req,res)=>{
    // 通过 get方式 请求过来的，是一个查询字符串，所以上面的路由中间件使用urlencodedParser
    // 通过 req.body 获取请求体内容
    res.send(req.body);
})

// 启动服务
app.listen(9000,()=>{
    console.log('服务启动成功57...');
})