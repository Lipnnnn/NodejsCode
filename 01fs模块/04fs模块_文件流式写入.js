// 1. 导入 fs
const fs = require('fs');

// 2. 创建写入流对象
const ws = fs.createWriteStream('./静夜思.txt');  // 参数是表示文件名

// 3. write写入
ws.write('床前明月光\r\n');
ws.write('疑是地上霜\r\n');
ws.write('举头望明月\r\n');
ws.write('低头思故乡');

// 4. 关闭通道
ws.close();