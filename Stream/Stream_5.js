/**
 * Stream 流
 */

// 5.解压文件
var fs = require('fs');

var zlib = require('zlib');

var readerStream = fs.createReadStream('input.txt.gz').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");