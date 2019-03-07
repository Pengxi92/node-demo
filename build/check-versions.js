/**
 * 记录check-versions中的相关知识点
 */

let ex = null;
function exec (cmd) {
  ex = require('child_process').execSync(cmd).toString().trim()
  console.log('exec1');
  console.log(ex) // v8.9.1

  ex = require('child_process').exec(cmd).toString().trim()
  console.log(ex) // [object Object]
}
console.log('exec0');
exec('node -v');
console.log('exec2');

// exec0
// exec1
// exec2


var chalk = require('chalk')
console.log(chalk.yellow('Hello world!'))


var semver = require('semver')
console.log(semver.clean(process.version)) // 8.9.1


var shell = require('shelljs')
console.log(shell.which('yarn'))

// { [String: '/Users/bianlifeng/n/bin/yarn']
//   stdout: '/Users/bianlifeng/n/bin/yarn',
//   stderr: null,
//   code: 0,
//   cat: [Function: bound ],
//   exec: [Function: bound ],
//   grep: [Function: bound ],
//   head: [Function: bound ],
//   sed: [Function: bound ],
//   sort: [Function: bound ],
//   tail: [Function: bound ],
//   to: [Function: bound ],
//   toEnd: [Function: bound ],
//   uniq: [Function: bound ] }

console.log(shell.which('npm'))

// { [String: '/Users/bianlifeng/n/bin/npm']
//   stdout: '/Users/bianlifeng/n/bin/npm',
//   stderr: null,
//   code: 0,
//   cat: [Function: bound ],
//   exec: [Function: bound ],
//   grep: [Function: bound ],
//   head: [Function: bound ],
//   sed: [Function: bound ],
//   sort: [Function: bound ],
//   tail: [Function: bound ],
//   to: [Function: bound ],
//   toEnd: [Function: bound ],
//   uniq: [Function: bound ] }


process.exit(1)
// 以下不执行
console.log('exit')
