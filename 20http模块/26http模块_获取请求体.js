// 获取请求体：以下方式了解即可，后续会学习更为简单的方式去获取请求体

// 引入 http 模块
const http = require('http');

// 创建服务
const server = http.createServer((request,response)=>{
    // 在这里面获取请求体
    // 1. 定义一个变量存储获取到的请求体
    let body = '';
    // 2. 绑定 data 事件
    request.on('data',chunk=>{
        body += chunk;
    });
    // 3. 绑定 end 事件
    request.on('end',()=>{
        // 在data事件执行完毕之后，也就是请求体的数据获取完毕之后，会执行end事件
        console.log(body);  // username=admin&password=123
        // 响应
        response.end('Hello HTTP');
    });
});

// 监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务启动成功...');
});