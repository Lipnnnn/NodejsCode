/**
 * npm初始化包：（其实就是创建了一个package.json的文件）
 * 1. 创建一个空项目，然后以此目录为工作目录【启动命令行工具/打开终端】，执行【npm init】
 * 2. 【npm init】命令的作用是将文件夹初始化为一个【包】，交互式创建【package.json】文件
 * 3. 【package.json】是包的配置文件，每个包都必须要有【package.json】
 * 
 * 初始化的过程中有一些注意事项：
 * 1. package.name（包名）不能使用中文、大写，默认值是文件夹的名字，所以文件夹名称也最好不要使用中文和大写
 * 2. version（版本号）要求【x.x.x】的形式，x必须是数字，默认值是1.0.0
 * 3. ISC证书与MIT证书功能上是相同的，关于开源证书扩展阅读：
 *    http://www.ruanyifeng.com/blog/2011/05/how to choose free software licenses.html
 * 4. package.json可以手动创建与修改
 * 5. 使用【npm init -y】或者【npm init --yes】可以快速创建【package.json】
 * 
 */