/**
 * 这个文件写创建模型对象的代码
 */

const mongoose = require('mongoose');

// 创建表
let AccountSchema = new mongoose.Schema({
    title: {type: String, required: true},
    time: {type: Date, required: true},
    type: {type: String, enum: [1,-1]},
    account: {type: Number},
    remarks: {type: String}
});

// 创建模型对象
let AccountModel = mongoose.model('accounts',AccountSchema);

// 暴露模型对象
module.exports = AccountModel;