/**
 * 文件的重命名和移动使用的方法是：
 *     rename('旧文件路径','新文件路径','回调函数');
 */

// 1. 引入 fs 模块
const { log } = require('console');
const fs = require('fs');

// 2.2 使用rename()修改文件名
// fs.rename('./座右铭.txt','./论语.txt',err=>{
//     if(err){
//         console.log('修改文件名失败');
//         return;
//     }
//     console.log('修改文件名成功'); 
// });

// 2.3 使用rename()移动文件的位置
fs.rename('./资料/09fs模块_文件删除.js','./09fs模块_文件删除.js',err=>{
    if(err){
        console.log('移动失败');
        return;
    }
    console.log('移动成功');
});