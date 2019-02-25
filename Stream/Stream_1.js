/**
 * Stream 流
 */

// 1. 从流中读取数据
var fs = require('fs');

var data = '';

// 创建创建可读流
var readerStream = fs.createReadStream('./read.txt');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
  console.log('获取data', data);
});

readerStream.on('end',function(){
  console.log('end', data);
});

readerStream.on('error', function(err){
  console.log('err', err.stack);
});

readerStream.on('finish', function(){
  console.log('finish', data);
});

console.log("读取数据执行完毕");


// 读取数据执行完毕
// 获取data 淘宝地址 Http://www.taobao.com
// end 淘宝地址 Http://www.taobao.com