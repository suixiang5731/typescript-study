// unknown 可以说是更安全的 any
let value:unknown={}
let value2:any="assdas"
function f1(a:any):any{

}
let value3:string=value2 // unknown 可以赋值给任意类型的变量
// let value4:string=value1 // any类型只能赋值给 unknown 类型或者 any 类型的变量

let a:never

/**
 * 可以使用 never 的一些情况
 * 1. 抛出错误 error 时，throwError():never
 * 2. 死循环中使用
 */
function throwError():never {
    throw new Error()
}
// 联合类型
let arr:(string|number)[]

// 交叉类型
class obj1class {
    a:number
}
class obj2class {
    b:number
}

/**
 * ‘let obj3:obj1class&obj2class’ 中的
 * ‘obj1class&obj2class’ 用于使得 obj3 同时满足 obj1class 和
 *  obj2class 中所规定的类型和属性
 */
let obj3:obj1class&obj2class={
    a:1,
    b:2
}
/*// 只写一个会报错
let obj3:obj1class&obj2class={
    // a:1,
    b:2
}*/



