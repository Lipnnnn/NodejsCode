// 获取请求路径 和 获取查询字符串

// 引入 http 模块
const http = require('http');

// 创建服务
const server = http.createServer((request,response)=>{
    // 实例化一个url对象
    let url = new URL(request.url,'http://127.0.0.1:9000');
    console.log(url);  // 得到一个对象，里面包含很多信息，其中就包括pathname请求路径和searchParams查询字符串
    // 输出路径pathname
    console.log(url.pathname);  // '/search'
    // 输出查询字符串searchParams对象
    console.log(url.searchParams);  // URLSearchParams { 'uname' => 'admin', 'pass' => '123' }
    // 输出查询字符串对象的其中一个值：要使用get()方法
    console.log(url.searchParams.get('uname'));  // admin

    response.end('http');
});

// 监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务启动成功...');
});