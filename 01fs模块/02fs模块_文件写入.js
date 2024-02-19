/**
 * 1. 概念：
        fs：file system （文件系统）
        fs模块可以实现与硬盘的交互，例如文件的创建、删除、重命名、移动，
        还有文件内容的写入、读取，以及文件夹的相关操作
 */
    

/**
 * 2. writeFile异步写入：
 *    语法：fs.writeFile(file,data,options,callback)
 *    参数说明：
 *            file 文件名（需要写入到哪个文件）
 *            data 待写入的数据
 *            options 选项设置（可选）
 *            callback 回调函数
 */
// 需求：新建一个文件'座右铭.txt'，写入内容'三人行，则必有我师焉'
// 2.1 导入 fs 模板
const fs = require('fs');
// 2.2 writeFile写入文件
fs.writeFile('座右铭.txt','三人行，则必有我师焉',err=>{
    // err：如果写入失败则err等于错误对象，如果写入成功则err等于null
    if(err){
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
});

console.log(1+1);


/**
 * 3. writeFileSync同步写入：
 *    语法：语法：fs.writeFileSync(file,data,options)  // 没有回调函数
 */
fs.writeFileSync('./test.txt','测试');

console.log(2+2);