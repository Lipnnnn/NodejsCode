/**
 * 1. 命令行停止服务：`ctrl+c`
 * 2. 当服务启动后，更新代码【必须重启服务器才能生效】
 * 3. 响应内容中文乱码的解决办法：
 *    response.setHeader('content-type','text/html;charset=utf-8');
 * 4. 端口号被占用：
 *    Error: listen EADDRINUSE: address already in use :::9000
 *    解决办法：
 *    1) 关闭当前正在运行监听端口的服务（使用较多）
 *    2) 修改成其他没有被占用的端口号
 * 5. 如果端口号被其他程序占用，可以使用【资源监视器】找到占用端口的程序，然后使用【任务管理器】关闭对应的程序
 * 6. HTTP协议默认端口号是80，HTTPS协议的默认端口号是443，HTTP服务开发常用端口号有3000，8080，8090，9000等
 */

// 引入 http 模块
const http = require('http');

// 创建服务
const server = http.createServer((request,response)=>{
    // 设置响应头，防止中文乱码
    response.setHeader('content-type','text/html;charset=utf-8');
    // 设置响应体
    response.end('你好');
});

// 监听端口，启动服务
server.listen(9000);