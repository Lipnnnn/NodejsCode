/**
 * express中session操作：
 * 1. 添加session：
 *    req.session.username = 'admin';
 * 2. 获取session:
 *    console.log(req.session.username);  // admin
 * 3. 删除session
 *    req.session.destroy();
 * 
 */

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// 设置session的中间件
app.use(session({
    name: 'sid',  // 设置cookie的name，默认值是：connect.sid
    secret: 'auguigu',  // 参与加密的字符串（又称签名）
    saveUninitialized: false,  // 是否为每次请求都设置一个cookie用来存储session的id
    resave: true,  // 是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'  // 数据库的连接配置
    }),
    cookie: {
        httpOnly: true,  // 设置为true表示，前端无法通过document.cookie来操作cookie
        maxAge: 1000*60*5  // 控制seesionID的过期时间
    }
}));

// 设置路由规则
app.get('/',(req,res)=>{
    res.send('hello');
})

// 添加session
app.get('/set-session',(req,res)=>{
    if(req.query.username === 'admin' && req.query.password === 'admin'){
        // 将username存入session
        req.session.username = 'admin';
        res.send('登录成功');
    }else{
        res.send('登录失败');
    }
});

// 获取session
app.get('/get-session',(req,res)=>{
    if(req.session.username){
        console.log(req.session.username);
        res.send(`购物车页面，欢迎您${req.session.username}`);
    }else{
        res.send('您还没有登录~');
    }
});

// 删除session
app.get('/delete-session',(req,res)=>{
    req.session.destroy(()=>{
        res.send('退出成功~');
    })
})

// 监听端口，启动服务
app.listen('3000',()=>{
    console.log('服务启动成功66...');
})
    
    
    
    