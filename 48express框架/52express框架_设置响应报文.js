/**
 * 设置响应报文
 */

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    // express 响应
    // 1.设置响应状态码
    res.status(500);
    
    // 2.设置响应头
    res.set('aaa','bbb');

    // 3.设置响应体（使用send()方法，不会中文乱码）
    res.send('你好，express');

    // 4.跳转响应（重定向）
    res.redirect('https://www.baidu.com');

    // 5.下载响应
    res.download(__dirname + '/test.html');

    // 6.JSON响应
    res.json({
        name: '尚硅谷',
        slogon: '让天下没有难学的技术'
    })

    // 7.响应文件内容
    res.sendFile(__dirname + '/test.html');

});

app.listen(9000,()=>{
    console.log('服务启动成功52...');
})