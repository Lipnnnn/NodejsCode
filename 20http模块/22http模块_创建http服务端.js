// 1. 引入 http 模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request,response)=>{
    response.end('Hello HTTP server');  // response.end()方法用来设置【响应体】
});

// 3. 监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已经启动...');  // 该回调函数只有在服务启动成功之后才会执行
});

// 4. 在终端执行该文件之后，服务就启动成功了，这时9000这个端口就被这个程序占用了

// 5. 在浏览器访问本地的9000端口，就会执行这个文件