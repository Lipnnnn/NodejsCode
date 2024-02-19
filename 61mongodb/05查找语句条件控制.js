/**
 * 在查找数据库中数据时的一些条件控制语法：
 * 在mongodb中不能使用 > < >= <= !== 等运算符，需要使用替代符号
 * 
 * 【>】 使用 【$gt】
 * 【<】 使用 【$lt】
 * 【>=】 使用 【$gte】
 * 【<=】 使用 【$lte】
 * 【!==】 使用 【$ne】
 * 【逻辑或】 使用 【$or】
 * 【逻辑与】 使用 【$and】
 * 
 */

// 导入mongoose
const mongoose = require('mongoose');

// 连接mongodb服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
mongoose.connection.once('open',()=>{
    // 创建表
    let BookSchema = new mongoose.Schema({
        author: String,
        name: String,
        price: Number
    });

    // 创建表的模型对象
    let BookModel = mongoose.model('book',BookSchema);

    // 查找价格小于20的图书
    BookModel.find({price: {$lt:20}}).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    })

    // 查找曹雪芹或者余华的书
    BookModel.find({$or: [{author: '曹雪芹'},{author: '余华'}]}).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    })

    // 查找价格大于20且小于30的书
    BookModel.find({$and: [{price: {$gt: 20}},{price: {$lt: 30}}]}).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    })

});

