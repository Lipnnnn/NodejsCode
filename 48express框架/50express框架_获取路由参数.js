/**
 * 路由参数是指：URL路径中的参数（数据） 
 * 
 * // 这里的id就是路由参数，通过【req.params.id】来获取id
 * app.get('/:id.html',(req,res)=>{
 *      res.end('商品详情，商品id为' + req.params.id);
 * })
 * 
 */

const express = require('express');

const app = express();

app.get('/:id.html',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8');

    res.end('商品详情，商品id为' + req.params.id);
})

app.listen(9000,()=>{
    console.log('服务启动成功，50...');
})