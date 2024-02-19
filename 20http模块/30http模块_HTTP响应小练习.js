/**
 * 需求：
 * 搭建HTTP服务，响应一个4行3列的表格，并且要求表格有隔行换色效果，且点击单元格能高亮显示
 */

// 引入 http 模块
const http = require('http');
// 引入 fs 模块
const fs = require('fs');
// 引入path 模块
const path = require('path');

// 创建服务
const server = http.createServer((request,response)=>{
    // 当请求发送过来的时候，就返回一个table给前端
    // 那么这里只需设置请求体为一个html文件即可
    // 这里我们使用fs模块读取html文件中的内容，然后返回给前端
    let html = fs.readFileSync(path.resolve(__dirname,'./30htt模块_HTTP响应小练习.html'));
    // 此时html变量就读取到了html文件的内容，html变量是一个Buffer类型
    response.end(html);  // Buffer类型可以直接传给response.end()
});

// 监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务启动成功30...');
})