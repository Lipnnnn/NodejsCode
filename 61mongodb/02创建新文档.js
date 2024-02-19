/**
 * 创建新文档，其实就是新建一个表（在MySql中称为表）
 * 
 * 常用字段类型：
 * String   ---   字符串
 * Number   ---   数字
 * Boolean  ---   布尔值
 * Array    ---   数组，也可以使用[]来标识
 * Date     ---   日期
 * 
 */

// 1. 安装mongoose 【npm i mongoose】

// 2. 导入mongoose
const mongoose = require('mongoose');

// 3. 连接mongodb服务
// 27017是mongodb默认的端口号
// bilibili是数据库名称，如果没有这个数据库，会自动新建一个
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 4. 设置回调
mongoose.connection.once('open',()=>{
    // 设置连接成功的回调
    // console.log('连接成功');

    // 5. 创建文档的结构对象（其实就是创建一个表）
    // 设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 6. 创建模型对象（可以对文档进行增删改查操作）
    let BookModel = mongoose.model('books',BookSchema);  // books是集合的名称（其实就是表的名称）

    // 7. 新增
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    },(data,err)=>{
        if(err){
            console.log('错误');
            return;
        }
        // 如果没有出错，则输出插入后的文档对象
        console.log(data);

        // 8. 关闭数据库连接（项目运行过程中，不会添加该代码）
        mongoose.disconnect();
    }).then((data,err)=>{
        if(err){
            console.log('错误');
            return;
        }
        // 如果没有出错，则输出插入后的文档对象
        console.log(data);

        // 8. 关闭数据库连接（项目运行过程中，不会添加该代码）
        mongoose.disconnect();
    });

});
