// 以后fs模块的路径都使用__dirname来设置

// __dirname：可以理解为是一个全局变量
//            它保存了【所在文件的所在目录的绝对路径】

const fs = require('fs');
fs.writeFileSync(__dirname + '/html.txt','hello');