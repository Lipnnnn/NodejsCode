/**
 * 这个文件写主代码
 */

const db = require('./db/db.js');
const BookModel = require('./models/BookModel.js');

// db暴露的是一个函数，函数有两个参数（两个参数都是回调函数，error回调函数可以省略），这里可以直接使用db()调用函数
db(()=>{
    // 这个是success回调函数
    // 这里面写数据库连接成功之后的操作

    // 比如写一个插入书籍的操作
    BookModel.create({
        name: '阿Q正传',
        author: '鲁迅',
        price: 59
    }).then((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    });

});