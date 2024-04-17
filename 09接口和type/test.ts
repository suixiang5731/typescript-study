// 使用type定义一个 联合类型 aString
type aString = string | number | number[];
let b: aString = "asdsa"

// 对象
type obj1 = {
    a: number
}
type obj2 = {
    b: string
}
type objAll = obj1 & obj2

// 函数
type f1 = (a: string) => string
let f11: f1 = function (a) {
    return ''
}

/**
 * 接口
 *  可以用来定义：函数，数组，对象，类
 */
type obj3_0 = {
    a1: number
}

// 对象接口
interface obj3 {
    /*// 直接写的写法
    type: {
        a1: number
    }*/

    // 使用外部定义的写法（必填）
    testKey: obj3_0,

    // 可选
    testKey2?: string,
    // 此处的 propsName 取值只能为 string|number|symbol
    // propsName 就是 obj3 的字段名的类型，所有取值只能为 string|number|symbol
    [propsName: string]: any // 加上这个之后就可以随意的在后面加属性了
}

/**
 * f2 中使用 obj3，限制入参 - a，
 * 从而实现快速定位 a.type.a1 的链式调用哪里出错，
 * 同时在 入参 a 传入时进行类型校验
 */
function f2(a: obj3) {
    console.log(a.testKey.a1)
}

// f2({type: 1}) // 报错
f2({testKey: {a1: 1}})
f2({testKey: {a1: 1}, sd: 1233})

// 函数接口
// 定义在对象里面的写法
interface obj5 {
    a: 123

    f1(): (a: number) => string
}

// 单纯定义一个函数的写法
interface f5 {
    /**
     * (a:number,b:number) 控制入参类型
     * string  控制返回值类型
     */
    (a: number, b: number): string
}

// 使用函数接口
let ff5: f5 = function (a, b) {
    return "asdf"
}

// 类接口 - implements  使用该接口规范类的编写
interface person {
    age: number,

    // 简便写法 等价于 eat():(food:string)=>string
    eat(food: string): string
}

// 使用
class Mary implements person {
    age: number

    // eat(food: string): string
    eat(food: string) {
        return "好吃"
    }

    constructor(age: number) {
        this.age = age
    }
}

// 数组接口，其实不算叫数组，严格意义上应该叫 可索引类型
interface arr {
    [index: number]: string
}

let arr1: arr = ["aa", "sss"]

// type 继承(合并)
type typeObj1 = {
    num: number
}
type typeObj2 = {
    str: string
}
type typeObj3 = typeObj1 & typeObj2

/**
 * interface 的继承
 */
interface interObj1 {
    num: number
}

interface interObj2 {
    str: string
}

interface interObj3 extends interObj1, interObj2 {
    arr: number[]
}

let interfaceObj3: interObj3 = {
    num: 1,
    str: '1',
    arr: [1, 2]
}

/**
 * interface 的声明合并
 * 注意：重名属性不能冲突，设置的类型必须一模一样
 */
interface interObj4 {
    a: string
}

interface interObj4 {
    // a: string|number // 冲突报错
    // a: number // 冲突报错
    b: number
}

let interfaceObj4: interObj4 = {
    a: '1',
    b: 1
}



