// 1. 安装mongoose 【npm i mongoose】

// 2. 导入mongoose
const mongoose = require('mongoose');

// 3. 连接mongodb服务
// 27017是mongodb默认的端口号
// bilibili是数据库名称，如果没有这个数据库，会自动新建一个
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 4. 设置回调
mongoose.connection.once('open',()=>{
    // 设置连接成功的回调
    console.log('连接成功');
});

mongoose.connection.on('error',()=>{
    // 设置连接错误的回调
    console.log('连接错误');
})

mongoose.connection.on('close',()=>{
    // 设置连接关闭的回调
    console.log('连接关闭');
})

// 5. 关闭mongodb的连接
// mongoose.disconnect();