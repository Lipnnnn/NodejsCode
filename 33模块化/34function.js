// 这个文件用来暴露数据

function eat(){
    console.log('吃饭');
}

function sleep(){
    console.log('睡觉');
}

// 暴露数据方法一：
module.exports = {
    eat,
    sleep
}

// 暴露数据方法二：
exports.eat = eat;
exports.sleep = sleep;