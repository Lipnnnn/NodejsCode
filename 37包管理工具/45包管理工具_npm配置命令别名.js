/**
 * 配置命令的别名：
 * 通过给命令配置别名可以更简单地执行命令
 * 
 * 配置【package.json】中的【scripts】属性
 * {
 *      "scripts":{
 *          "server": "node server.js",
 *          "start": "node index.js "
 *      }
 * }
 * 
 * 配置完成之后，可以使用别名执行命令：
 * 【npm run server】
 * 【npm run start】
 * 
 * 不过【start】别名比较特别，使用时可以省略【run】
 * 
 * 补充说明：
 * 【npm start】是项目中常用的一个命令，一般用来启动项目
 * 【npm run】有自动向上级目录查找的特性，跟【require】函数一样
 * 对于陌生的项目，我们可以通过查看【package.json】文件中的【scripts】属性来参考项目的一些操作
 * 
 */