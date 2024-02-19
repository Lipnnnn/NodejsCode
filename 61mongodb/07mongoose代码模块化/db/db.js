/**
 * 这个文件写连接数据库的代码
 */

const mongoose = require('mongoose');

// 这里为了方便使用，来了一个解构赋值
const {DBHOST,DBPORT,DBNAME} = require('../config/config.js');

// 暴露一个函数出去
// 参数success和error是两个回调函数
module.exports = function(success,error){
    // error参数可以省略
    if(typeof error !== 'function'){
        // 如果error不是函数，就给他一个默认值
        error = ()=>{
            console.log('连接失败');
        }
    }

    // 连接数据库
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

    // 设置回调
    mongoose.connection.once('open',()=>{
        // 连接成功
        // 执行成功的回调函数
        success();
    });

    mongoose.connection.on('error',()=>{
        // 连接失败
        // 执行失败的回调函数
        error();
    });

    mongoose.connection.on('close',()=>{
        // 连接关闭
        console.log('连接关闭');
    });
}



