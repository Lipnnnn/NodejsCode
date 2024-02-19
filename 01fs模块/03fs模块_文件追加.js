// 向文件末尾追加内容：有三种方式

// 1. 引入 fs 模块
const fs = require('fs');

// 2.1 方式一：使用异步追加appendFile()
fs.appendFile('./座右铭.txt','，温故而知新',err=>{
    if(err){
        console.log('追加失败');
        return;
    }
    console.log('追加成功');
});

// 2.2 方式二：使用同步追加appendFileSync()
fs.appendFileSync('./座右铭.txt','\r\n你好');

// 2.3 方式三：使用写入文件的方式writeFile()设置可选项来进行追加(设置{flag: 'a'})
fs.writeFile('./座右铭.txt','\r\n学而时习之，不亦说乎',{flag: 'a'},err=>{
    if(err){
        console.log('添加失败');
        return;
    }
    console.log('添加成功');
})