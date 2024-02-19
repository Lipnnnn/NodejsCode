/**
 * 个性化查询：
 * 
 * 1. 字段筛选：
 * // 0表示不要的字段，1表示要的字段
 * BookModel.find().select({键值对}).then((err,data)=>{});  
 * 
 * 2. 数据排序：
 * // 1表示升序，-1表示降序
 * BookModel.find().sort({键值对（表示按照哪个字段进行排序）}).then((err,data)=>{});
 * 
 * // 3.数据截取：（分页）
 * skip：跳过
 * limit：限定
 * BookModel.find().skip(数字（表示要跳过多少条数据，从下一条开始查询）).then((err,data)=>{});
 * BookModel.find().limit(数字（表示要查询多少条数据）).then((err,data)=>{});
 * 
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

mongoose.connection.once('open',()=>{
    // 创建表
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 创建模型对象
    let BookModel = mongoose.model('books',BookSchema);

    // 查询图书的名字和价格
    // 0表示不要的字段，1表示要的字段
    BookModel.find().select({name: 1,price: 1,_id: 0}).then((data,err)=>{
        if(err){
            console.log('错误');
            return;
        }
        console.log(data);
    });

    // 查询全部书籍，按照价格升序排序
    // 1表示升序，-1表示降序
    BookModel.find().sort({price: 1}).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });

    // 把书籍按价格降序排序，查询第2到第4条（也就是跳过第1条不查询）
    BookModel.find().sort({price: -1}).skip(1).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });

    // 把书籍按价格升序排序，查询前3条
    BookModel.find().sort({price: 1}).limit(3).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    })

});