/**
 * Stream 流
 */

// 2. 写入流
var fs = require('fs');

var data = ' 写入文件';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('./output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
  console.log("写入完成。");
});

writerStream.on('error', function(err){
 console.log('error', err.stack);
});

console.log("写入流执行完毕");

// 写入流执行完毕
// 写入完成。