/**
 * MongoDB数据库的增删改查：
 * 
 * 增加：
 * 增加一条数据：BookModel.create({键值对}).then((err,data)=>{});
 * 增加多条数据：BookModel.insertMany([{},{}]).then((err,data)=>{});
 * 
 * 删除：
 * 删除一条数据：BookModel.deleteOne({键值对(表示要删除的是哪条数据)}).then((err,data)=>{});
 * 删除多条数据：BookModel.deleteMany({键值对(表示要删除的是哪条数据)}).then((err,data)=>{});
 * 
 * 更新：
 * 更新一条数据：BookModel.updateOne({键值对(定位到要更新的那条数据)},{键值对(更新的新数据)}).then((err.data()=>{}));
 * 更新多条数据：BookModel.updateMany({键值对(定位到要更新的那条数据)},{键值对(更新的新数据)}).then((err.data()=>{}));
 * 
 * 查询：
 * 查询一条数据：BookModel.findOne({键值对}).then((err.data()=>{}));
 * 查询多条数据：BookModel.find({键值对}).then((err.data()=>{}));
 * 查询全部数据：BookModel.find().then((err.data()=>{}));
 * 
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bilibili',{useNewUrlParser:true});

// 设置回调
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功');

    // 创建文档模型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 创建模型对象
    let BookModel = mongoose.model('books',BookSchema);

    // 向books表中添加一个数据
    BookModel.create({
        name: 'JavaScript权威指南',
        author: 'Nicholas C. Zakas',
        price: 109
    }).then((data,err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
    });

    // 向books表中添加多个数据
    BookModel.insertMany([
        {
            name: 'JavaScript高级程序设计',
            author: 'Nicholas C. Zakas',
            price: 99
        },
        {
            name: 'JavaScript语言精粹',
            author: 'Douglas Crockford',
            price: 79
        }
    ]).then((data,err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
    });

    // // 删除一条数据
    BookModel.deleteOne({name: 'JavaScript高级程序设计'}).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });

    // // 删除多条数据
    BookModel.deleteMany({name: '西游记'}).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });

    // 更新一条数据
    BookModel.updateOne({_id: '6587ef1ac7b3b8f9c50bb413'},{price: 66}).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });

    // 查询一条数据
    BookModel.findOne({name: 'JavaScript语言精粹'}).then((data,err)=>{
        if(err){
            console.log('错误');
            return;
        }
        console.log(data);
    });

    // // 查询表中全部数据
    BookModel.find().then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });


});