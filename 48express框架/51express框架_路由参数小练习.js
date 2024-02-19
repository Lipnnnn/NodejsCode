/**
 * 小练习：
 * 需求：根据请求的路由参数的不同，返回给前端不同的内容
 *       这里返回不同歌手的信息
 */

const express = require('express');
// 引入 json 文件
const {singers} = require('./singers.json');

const app = express();

app.get('/:id.html',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8');
    // 获取到路由参数
    let id = req.params.id;
    for(let i=0;i<singers.length;i++){
        if(singers[i].id == id){
            res.end(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>路由参数小练习</title>
            </head>
            <body>

                <div id="singerName"></div>
                <img src="" alt="" id="img">

                <script>
                    // 获取元素
                    var singerName = document.querySelector('#singerName');
                    var img = document.querySelector('#img');
                    singerName.innerHTML = '${singers[i].singer_name}';
                    img.src = '${singers[i].singer_pic}';
                </script>
                
            </body>
            </html>
            `);
            return;
        }
    }
});

app.listen(9000,()=>{
    console.log('服务启动成功，51路由小练习...');
})