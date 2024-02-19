/**
 * 字段值验证：（就是给每个字段添加一些限制词，比如：必填项、唯一值等等）
 * 
 * 必填项：required: true
 * 默认值：default: 'xxx'
 * 枚举值：enum: ['男','女']
 * 唯一值：unique: true
 * 
 */

// 导入mongoose
const mongoose = require('mongoose');

// 连接mongodb服务
mongoose.connect('mongodb://localhost/bilibili');

// 设置回调
mongoose.connection.once('open', () => {    
    console.log('数据库连接成功');  
    // 创建一个表
    let userSchema = new mongoose.Schema({
        username: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, default: '123456@qq.com', unique: true}
    });
    // 创建对象模型
    let UserModel = mongoose.model('user', userSchema);
    // 新增
    UserModel.create({
        username: 'zhangsan',
        password: '123456',
        email: '123456@163.com'
    }).then((data,err)=>{
        if(err){
            console.log(err);
            return;
        }
        // 如果没有出错，则输出插入后的文档对象
        console.log(data);

        // 8. 关闭数据库连接（项目运行过程中，不会添加该代码）
        mongoose.disconnect();
    });
});
