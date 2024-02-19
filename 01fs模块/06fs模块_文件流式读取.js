// 流式读取在读取大文件时速度比较快

// 1. 引入 fs 模板
const fs = require('fs');

// 2. 创建读取流对象
const rs = fs.createReadStream('./静夜思.txt');

// 3. 绑定 data 事件  chunk: 块
rs.on('data',chunk=>{
    console.log(chunk.toString());
});

// 4. end 事件 （可选）
rs.on('end',()=>{
    console.log('读取完成');
});