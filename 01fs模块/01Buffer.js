/*
    1. 概念：
        Buffer中文译为【缓冲区】，是一个类似于Array的对象，用于表示固定长度的字节序列，
        换句话说，Buffer就是一段固定长度的内存空间，用于处理二进制数据
    2. 特点：
        Buffer大小固定，且无法调整；
        Buffer性能较好，可以直接对计算机内存进行操作
        每个元素的大小为1字节(byte)  (1byte = 8bit)
*/

// 3. 创建Buffer（有三种方式）
// 3.1 方法一：alloc
let buf = Buffer.alloc(10);  // 创建一个10字节的Buffer
// 此时buf会以十六进制的形式输出，并且会置零
console.log(buf);   // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 3.2 方法二：allocUnsafe
let buf2 = Buffer.allocUnsafe(10);
// 此时表面上看起来与alloc()方法创建是一样的，但是其实是有区别的
// 区别就是：allocUnsafe()是不安全的意思，它创建出来的Buffer是会保留之前内存中存储的数据的
// allocUnsafe()创建的优点是：比alloc()方法要快一些，因为它不会有置零的操作
console.log(buf2);  // <Buffer 00 00 00 00 00 00 00 00 00 00>

// 3.3 方法三：from
// 该方法可以将字符串或数组转换成Buffer
let buf3 = Buffer.from('hello');
// 会将每一个字母按照unicode编码转换，并通过十六进制显示出来
console.log(buf3);  // <Buffer 68 65 6c 6c 6f>


// 4. Buffer与字符串的转换：使用toString()
let buf4 = Buffer.from([105,108,111,118,101,121,111,117]);
console.log(buf4);  // <Buffer 69 6c 6f 76 65 79 6f 75>
console.log(buf4.toString());   // iloveyou
