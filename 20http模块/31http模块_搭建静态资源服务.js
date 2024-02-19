// 搭建静态资源服务

// 引入 http 模块
const http = require('http');
// 引入 fs 模块
const fs = require('fs');

// 创建服务
const server = http.createServer((request,response)=>{
    response.setHeader('content-type','text/html;charset=utf-8');
    // 根据前端发过来的不同的路径，返回不同的内容
    // 获取路径
    const url = new URL(request.url,'http://127.0.0.1');
    let pathname = url.pathname;
    // 拼接要返回内容的路径
    let str = __dirname + pathname;  // 路径不能有中文！
    // 读取该路径的内容
    fs.readFile(str,(err,data)=>{
        if(err){
            response.statusCode = 500;
            response.end('读取失败')
            return;
        }else{
            response.end(data);
        }
    })
});

// 监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务启动成功31...');
})