// 引入 http 模块
const http = require('http');

// 创建服务
const server = http.createServer((request,response)=>{
    // 设置响应体
    response.setHeader('content-type','text/html;charset=utf8');
    response.end('请求成功');
});

// 监听端口，启动服务
server.listen(9000);