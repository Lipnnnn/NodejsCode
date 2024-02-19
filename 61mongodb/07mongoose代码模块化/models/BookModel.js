/**
 * 这个文件写创建模型对象的代码
 */

const mongoose = require('mongoose');

// 创建表
let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number
});

// 创建模型对象
let BookModel = mongoose.model('books',BookSchema);

// 暴露模型对象
module.exports = BookModel;