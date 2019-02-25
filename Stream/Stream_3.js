/**
 * Stream 流
 */

// 3. 管道流-转移文件信息
var fs = require('fs');

// 创建创建可读流
var readerStream = fs.createReadStream('./read.txt');

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("管道流-转移文件信息执行完毕");