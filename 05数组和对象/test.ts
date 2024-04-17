/**
 * 数组 Array 相关
 */

// 下述写法 -- arr:[] -- 代表只能是一个空数组
// let arr:[] = [1] // 报错
let arr:[] = []

// 元组
let arr_0:[string,number] = ["1",2]

// 纯数字的数组
let arr_1:number[] = [1,2]

// 纯字符串的数组
let arr_2:string[] = ['1','2']

// 数组的一些特殊需求的处理
/**
 * 1. 元素是字符串或者数组
 * 使用括号 '()' 将number|string 包裹起来，
 * 中间的竖线代表 number 或 string
 */
let arr1:(number|string)[] = ['1',2]

/**
 * 2. 数组中有一个元素是可有可无的，如下面的元组
 * 第三个参数类型后面加个问号 -- 'number?'，就可以实现
 * 第三个元素可写可不写的效果
 */
let arr2:[string,number,number?] = ["1",2] // 元组

/**
 * 3. 数组中前面固定，后面可以随意添加
 * 写法如下，添加一个 ‘...(number|string)[]’ ，即可实现
 * 下面的arr3，前面的两个元素指定，第一个为string，第二个为number
 * 后面则可以随意的添加 number 或 string
 */
let arr3:[string,number,...(number|string)[]] = ["1",2] // 元组

/**
 * 对象 Object 相关
 */

let obj:{}={a:123,c:123}

// 字面量写法 obj_0 后面跟随的这种写法 ‘:{x:123,y:123}’
// 他本身的赋值也只能是 ‘{x:123,y:123}’
let obj_0:{x:123,y:123}={x:123,y:123}

// 下面的写法规定了 obj_1 只有x和y两个字段，且 x 类型为number，
// y 类型为string
let obj_1:{x:number,y:string}={x:123,y:"123"}
// let obj_1:{x:number,y:string}={x:123,y:"123",z:"123"} // 报错


// 对象的一些特殊需求的处理
/**
 * 1. 规定键名是一个数字，也即字段名是一个数字
 */
let obj1:{[propsName:number]:number}={12:333,123:333}
/**
 * 2. 属性可有可无
 * 例如下面的 z 属性，加上问号即可
 */
let obj2:{x:number,y:string,z?:number}={x:123,y:"123"}
/**
 * 3. 固定某几个属性，其他属性随便加
 */
let obj3:{[propsName:string]:number}={x:333,y:333}
// 固定 一定要有x，y字段，后面字段通过 ‘[propsName:string]:number’ 设置实现随便添加
let obj3_1:{x:number,y:number,[propsName:string]:number}={x:12,y:3, test:1}
let obj3_2:{x:number,y:number,[propsName:string]:number|string}={x:12,y:3, test:'1'}

// 额外小知识点  ts中 ? 的使用
/**+
 * ts中经常用？号来代表可选，比如方法中可选参数，
 * 对象中可选属性。以及是否存在的判断。
 */



