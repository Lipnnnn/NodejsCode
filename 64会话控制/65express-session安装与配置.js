/**
 * express-session安装与配置：
 * 1. const session = require('express-session');
 * 2. const MongoStore = require('connect-mongo');
 * 3. 设置session的中间件
 *    app.use(session({
        name: 'sid',  // 设置cookie的name，默认值是：connect.sid
        secret: 'auguigu',  // 参与加密的字符串（又称签名）
        saveUninitialized: false,  // 是否为每次请求都设置一个cookie用来存储session的id
        resave: true,  // 是否在每次请求时重新保存session
        store: MongoStore.create({
            mongoUrl: 'mongodb://127.0.0.1:27017/bilibili'  // 数据库的连接配置
        }),
        cookie: {
            httpOnly: true,  // 设置为true表示，前端无法通过document.cookie来操作cookie
            maxAge: 1000*60  // 控制seesionID的过期时间
        }
    }));
 * 
 */

const express = require('express');

// 1. 导入express-session
const session = require('express-session');

// 2. 导入数据库的连接，将session的信息存入到数据库中
const MongoStore = require('connect-mongo');

const app = express();

// 3. 设置session的中间件
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
        maxAge: 1000*60  // 控制seesionID的过期时间
    }
}));



