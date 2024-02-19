/**
 * 静态资源中间件：
 * 就是放置静态资源的文件夹的路径
 * 
 * 注意事项：
 * 1. index.html文件为默认打开的资源
 * 2. 如果静态资源与路由规则同时匹配，谁代码写在前面就响应谁
 * 3. 路由响应动态资源，静态资源中间件响应静态资源
 * 
 */

const express = require('express');

const app = express();

// 设置静态资源中间件
app.use(express.static(__dirname + '/public'));  // __dirname + '/public' 表示静态资源存放的文件夹的位置

app.listen(9000,()=>{
    console.log('服务启动成功56...');
})