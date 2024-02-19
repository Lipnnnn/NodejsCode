/**
 * 练习：
 * 按照以下要求搭建HTTP服务
 * 如果请求类型是get，并且请求路径是/login，就响应'登录页面';
 * 如果请求类型是get，并且请求路径是/reg，就响应'注册页面'。
 */

// 引入 http 模块
const http = require('http');

// 创建服务
const server = http.createServer((request,response)=>{
    // 设置编码，防止中文乱码
    response.setHeader('content-type','text/html;charset=utf8');
    // 获取请求的类型
    let method = request.method;
    // 获取请求的路径
    let url = new URL(request.url,'http://127.0.0.1:9000');
    let pathname = url.pathname;
    // 判断
    if(method.toLowerCase() === 'get'){
        if(pathname === '/login'){
            // 响应
            response.end('登录页面');
        }else if(pathname === '/reg'){
            // 响应
            response.end('注册页面');
        }else{
            // 响应
            response.end('其他页面');
        }
    }else{
        response.end('不是get请求');
    }
});

// 监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务启动成功28...');
});