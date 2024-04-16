import axios from "axios"; // 自带声明文件 -- index.d.ts
// 无声明文件会报错： 无法解析模块 'lodash' 的定义，安装 @types/lodash 即可解决 (另注：该报错不影响库的使用)
// 基本上所以第三方库的声明文件命名都遵循这个格式 @types/xxx
import * as _ from "lodash"

const a: string = "asd"
/*ts 使用 test.js 中定义的 window.test001 会报错 ：
未解析的变量 test001，找不到 test001*/
console.log(test001)
// console.log(window.test001)
/*
要解决上面的问题，需要在文件 global.d.ts 中声明全局变量，就不会报错了
 */