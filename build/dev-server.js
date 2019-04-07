/**
 * 记录dev-server中的相关知识点
 */

var opn = require('opn')
opn('http://www.baidu.com', {app: 'safari'} ).then(() => {
  console.log('open baidu')
})
