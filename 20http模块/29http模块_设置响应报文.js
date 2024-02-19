// 设置响应的状态码、状态的描述、响应头、响应体

// 引入 http 模块
const http = require('http');

// 创建服务
const server = http.createServer((request,response)=>{
    // 1. 设置响应状态码
    response.statusCode = 200;

    // 2. 设置响应状态的描述（不常用，因为会自动跟随状态码显示对应的描述）
    response.statusMessage = 'iloveyou';

    // 3. 设置响应头
    response.setHeader('content-type','text/html;charset=utf-8');
    response.setHeader('myHeader','test');

    // 4. 设置响应体
    response.write('I');
    response.write('love');
    response.write('you');

    response.end();
});

// 监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务启动成功29...');
})