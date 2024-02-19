/**
 * jwt介绍：
 * JWT（JSON Web Token）是目前最流行的跨域认证解决方案，可用于基于token的身份验证
 * 主要用来【生成token】和【校验token】
 * 
 * jwt的使用：
 * 1. 导入jsonwebtoken
 *    const jwt = require('jsonwebtoken');
 * 2. 生成token
 *    jwt.sign(用户的数据,加密字符串,配置对象);  // expiresIn: 60  表示token的有效期为60秒
 * 3. 校验token
 *    jwt.verify(token字符串,加密字符串,回调函数);
 * 
 */

// 导入jsonwebtoken
const jwt = require('jsonwebtoken');

// 生成token
let token = jwt.sign({username: 'zhangsan'},'atguigu',{expiresIn: 60*1000*60*24});
console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNzA0NjM0MjQ0LCJleHAiOjE3OTEwMzQyNDR9.UpHakwhc-ZW4SNHu5i1A_54FTr3g9ETMlZ-bQT-vVJ4

let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5nc2FuIiwiaWF0IjoxNzA0NjM0MjQ0LCJleHAiOjE3OTEwMzQyNDR9.UpHakwhc-ZW4SNHu5i1A_54FTr3g9ETMlZ-bQT-vVJ4';

// 校验token
jwt.verify(t,'atguigu',(err,data)=>{
    if(err){
        console.log('校验失败！');
        return;
    }
    console.log(data);   // { username: 'zhangsan', iat: 1704634244, exp: 1791034244 }
});