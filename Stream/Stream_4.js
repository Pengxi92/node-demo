/**
 * Stream 流
 */

// 4.压缩文件
var fs = require('fs');

var zlib = require('zlib');

var readerStream = fs.createReadStream('./read.txt')

// 设置编码为 utf8。若不加，解压后的文件会为乱码
readerStream.setEncoding('UTF8');

readerStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");