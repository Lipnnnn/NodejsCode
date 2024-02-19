// 引入 fs 模块
const fs = require('fs');

// 1. 创建文件夹：mkdir('path','callback');
fs.mkdir('./html',err => {
    if(err){
        console.log('创建失败');
        return;
    }
    console.log('创建成功');
});

// 2. 递归创建多个文件夹：mkdir('path','{recursive: true}','callback');
fs.mkdir('./a/b/c',{recursive: true},err => {
    if(err){
        console.log('创建失败');
        return;
    }
    console.log('创建成功');
});

// 3. 读取文件夹：readdir('path','callback');
fs.readdir('./资料',(err,data)=>{
    if(err){
        console.log('读取文件夹失败');
        return;
    }
    console.log(data);  // 返回一个数组：[ '静夜思.txt' ]
});

// 4. 删除文件夹：rmdir('path','callback');
fs.rmdir('./html',err=>{
    if(err){
        console.log('删除文件夹失败');
        return;
    }
    console.log('删除文件夹成功');
});

// 5. 递归删除文件夹：rm('path','{recursive: true}','callback');
fs.rm('./a',{recursive: true},err=>{
    if(err){
        console.log('递归删除文件夹失败');
        return;
    }
    console.log('递归删除文件夹成功');
});