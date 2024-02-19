// 文件复制 有两种方式

// 引入 fs 模块
const fs = require('fs');

// 方式一：一次性全部读完，再写入
let data = fs.readFileSync('./静夜思.txt');
fs.writeFileSync('./静夜思2.txt',data);

// 方式二：流式读取和写入（一块一块地读，一边读取一边写入）
const rs = fs.createReadStream('./静夜思.txt');
const ws = fs.createWriteStream('./静夜思3.txt');
rs.on('data',chunk=>{
    ws.write(chunk);
});