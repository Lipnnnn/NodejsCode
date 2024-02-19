/**
 * 执行movies表相关的操作
 */

const db = require('./db/db.js');
const MovieModel = require('./models/MovieModel.js');

db(()=>{
    // 增加一个movie
    MovieModel.create({
        name: '炸弹专家',
        actor: '刘德华'
    }).then((err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    })
});