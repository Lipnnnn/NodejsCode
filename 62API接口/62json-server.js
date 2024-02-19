/**
 * RESTful API 是一种特殊风格的接口，规则示例如下：
 * 操作--------请求类型-------URL--------返回
 * 新增歌曲     POST         /song       返回新生成的歌曲信息
 * 删除歌曲     DELETE       /song/10    返回一个空文档
 * 修改歌曲     PUT          /song/10    返回更新后的歌曲信息（会将文件中原来的所有信息都覆盖，只剩下更新的这条数据）
 * 修改歌曲     PATCH        /song/10    返回更新后的歌曲信息（不会覆盖其他的数据，只更新该条数据）
 * 获取所有歌曲  GET          /song       返回歌曲列表数组
 * 获取单个歌曲  GET          /song/10     返回单个歌曲信息
 * 
 * 
 * 
 * json-server本身是一个JS编写的工具包，可以快速搭建RESTful API服务
 * 官方地址：https://github.com/typicode/json-server
 * 操作步骤：
 * 1. 全部安装json-server：
 *    【npm i -g json-server】
 * 2. 创建JSON文件(db.json)，编写基本结构：
 *    【就是一个json格式的文件】
 * 3. 以JSON文件所在的文件夹作为工作目录，执行如下命令：
 *    【json-server --watch db.json】
 * 4. 默认监听端口为3000
 * 
 */