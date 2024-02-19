P// 导入 http 模块
const http = require('http');

// 创建服务
const server = http.createServer((request,response)=>{
    // 1. 获取请求的方法：request.method
    console.log(request.method);

    // 2. 获取请求的url：request.url
    console.log(request.url);  // 只包含url中的路径与查询字符串，不包括IP和端口号

    // 3. 获取HTTP协议的版本号：request.httpVersion  （这个方法用得比较少）
    console.log(request.httpVersion);  // 1.1

    // 4. 获取HTTP的请求头：request.headers
    console.log(request.headers);  // 得到一个对象，里面包含所有的请求头信息

    // 5. 获取请求头中的其中一个值，比如host：request.headers.host 
    console.log(request.headers.host);  // 127.0.0.1:9000

    response.end('http');
});

// 监听端口，启动服务
server.listen(9000);