// 查看资源信息：stat('资源路径','回调函数');

// 引入 fs 模块
const fs = require('fs');

// stat()
fs.stat('./论语.txt',(err,data)=>{
    if(err){
        console.log('查看资源失败');
        return;
    }
    console.log(data);  // 包括：文件大小、创建时间、修改时间 等等
    console.log(data.isFile());  // true
    console.log(data.isDirectory());  // false
});