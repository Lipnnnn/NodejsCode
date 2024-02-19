/**
 * express获取请求报文
 */

const express = require('express');

const app = express();

app.get('/test',(req,res)=>{
    // 获取请求路径
    console.log(req.path);   // /test

    // 获取请求查询参数
    console.log(req.query);  // { username: 'zhangsan' }

    // 获取ip
    console.log(req.ip);  // ::ffff:127.0.0.1

    // 获取请求头
    console.log(req.get('host'));  // 获取主机名：127.0.0.1:9000

    res.end('hhh');
});

app.listen(9000,()=>{
    console.log('服务启动成功，49...');
})