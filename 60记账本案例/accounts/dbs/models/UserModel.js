/**
 * 这个文件写创建模型对象的代码
 */

const mongoose = require('mongoose');

// 创建表
let UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// 创建模型对象
let UserModel = mongoose.model('users',UserSchema);

// 暴露模型对象
module.exports = UserModel;