/**
 * 什么是模板引擎：
 * 模板引擎是分离【用户界面】和【业务数据】的一种技术！
 * 可以简单地认为就是分离【html】和【js】。
 * 
 * 什么是EJS：
 * EJS是一个高效的JavaScript的模板引擎。
 * EJS（Embedded JavaScript）是一种运行在 Node.js 环境下的模板引擎。它允许你以 HTML 页面的形式编写动态内容，并且将 JavaScript 代码嵌入到 HTML 中。
 * 
 * 官网：https://ejs.co/
 * 中文网站：https://ejs.bootcss.com/
 * 
 * // 下载安装ejs
 * 【npm i ejs】
 * 
 */

// 引入ejs
const ejs = require('ejs');

// 定义数据
let name = '张三';

// ejs解析模板返回结构
// <%= %> 是ejs解析内容的标记，作用是输出当前表达式的执行结构
// 使用ejs.render()，render是渲染的意思
let result = ejs.render('我的名字是 <%= name %>',{name:name});

console.log(result);

