// 引入 path 模块
const path = require('path');

// 1. path.resolve('__dirname','相对路径')：拼接规范的绝对路径(常用！)
console.log(path.resolve(__dirname,'./html.txt'));  // d:\A新工科\NodejsCode\html.txt

// 2. path.sep()：获取操作系统的路径分隔符
console.log(path.sep);  // \

// 3. path.parse()：解析路径并返回一个对象(对象里面包括：文件的根目录、扩展名、文件名 等等)
let obj = path.parse('D:\\A新工科\\NodejsCode\\html.txt');
console.log(obj);  // {root: 'D:\\',dir: 'D:\\A新工科\\NodejsCode',base: 'html.txt',ext: '.txt',name: 'html'}

// 4. path.basename()：获取路径的基础名称
let basename = path.basename('D:\\A新工科\\NodejsCode\\html.txt');
console.log(basename);  // html.txt

// 5. path.dirname()：获取路径的目录名
let dirname = path.dirname('D:\\A新工科\\NodejsCode\\html.txt');
console.log(dirname);  // D:\A新工科\NodejsCode

// 6. path.extname()：获取路径的扩展名
let extname = path.extname('D:\\A新工科\\NodejsCode\\html.txt');
console.log(extname);  // .txt