// 文件删除 有两种方式

// 1. 引入 fs 模块
const fs = require('fs');

// 2.1 方式一：使用unlink('删除文件的路径','回调函数');
fs.unlink('./静夜思2.txt',err => {
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
});

// 2.2 方式二：使用rm('删除文件的路径','回调函数');
fs.rm('./静夜思3.txt',err => {
    if(err){
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
});