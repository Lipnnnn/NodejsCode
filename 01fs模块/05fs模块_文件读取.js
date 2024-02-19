// 1. 引入 js 模块
const fs = require('fs');

// 2.1 异步读取readFile('path','option','callback');  // option表示选项配置（可选项）
fs.readFile('./静夜思.txt',(err,data)=>{
    // err表示错误对象，data表示读取到的文件内容
    if(err){
        console.log('读取失败');
        return;
    }
    console.log(data.toString());
});

// 2.2 同步读取
let data = fs.readFileSync('./静夜思.txt');
console.log(data.toString());