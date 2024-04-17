/**
 * 类型推断
 */
let a = 123 // ts 自动推断a为number类型
// a.forEach() // a 为number类型，所以 ts 自动判断帮我们报错

// 没设置类型，ts自动推断 a，b为any类型，返回值为 void
function f1_1(a, b) {
}

// 没设置类型，ts自动推断 a，b为any类型，返回值类型为 {a: number, b: number}
// 小技巧：类型推断不符合自己要求时，可以使用 断言 帮助推断
function f1_2(a, b) {
    return {
        a: 12,
        b: 2
    }
}

/**
 * 类型兼容性
 */
interface inter1 {
    a: number,
    b: number,
    // e: number,
}

let obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 3,
}
/**
 * obj1 和 接口inter1 的结构类似，
 * 那么 obj1 就可以赋值给 obj2 ，
 * 此处的 obj1 不需要设置类型为 inter1 (当然设置成 inter1 也可以 -- let obj1:inter1)
 * 注意：只要 obj1 中包含 接口inter1 中定义的字段就可以兼容，
 * 但是 obj1 中不能缺少 inter1 中包含的字段，
 * 例如 inter1 中还有个 字段 'e: number,'  但是obj1中没有字段 e ，这种情况下就不行了，无法兼容
 */
let obj2: inter1 = obj1

// 方法
let f1 = function (a: number, b: number) {
}
let f2 = function (c: number, d: number) {
}
// 入参类型一样，形参名字不一样可以互相赋值
f1 = f2

let f1_0 = function (a: number, b: number, c: number) {
}
let f2_0 = function (c: number, d: number) {
}
// f1_0 的入参对 f2_0 的入参是包含关系，所以可以将 f2_0 赋值给 f1_0，反之则不行
f1_0 = f2_0

/**
 * 在TypeScript中，赋值语句左侧和右侧的函数类型必须是兼容的，
 * 否则会产生类型错误。在你的例子中，
 * f1_3 的类型是(a: number|string, b: number, c: number) => void，
 * 而 f2_3 的类型是(c: number, d: number) => void。
 * 它们的参数数量不同，因此不能直接将 f2_3 赋值给 f1_3。
 * 这样的写法在 TypeScript 中是不正确的，会导致类型错误。 --- 该解释来自chatgpt ，不一定正确，实际上下面的代码并没有报错
 */
/*let f1_3 = function (a: number|string, b: number, c: number) {
}
let f2_3 = function (c: number, d: number) {
}
f1_3 = f2_3*/

/**
 * 在TypeScript中，函数赋值需要考虑参数类型和返回类型是否兼容。
 * 在你的例子中，f1_3 的函数类型是(a: number, b: number, c: number) => void，
 * 而 f2_3 的函数类型是(c: number|string, d: number) => void。
 * 在这种情况下，因为 f2_3 的参数类型是number|string，
 * 它可以接受比 f1_3 更广泛的输入。这意味着 f2_3 的函数类型是 f1_3 的子类型，
 * 所以你可以将 f2_3 赋值给 f1_3，而不会产生类型错误。
 * 所以，f1_3 = f2_3 这样的写法在 TypeScript 中是合法的。
 */
/*let f1_3 = function (a: number, b: number, c: number) {
}
let f2_3 = function (c: number|string, d: number) {
}
f1_3 = f2_3*/

// 类相关
// 比较 实例属性，不比较构造函数和静态属性
class class1 {
    a:number
    static c:string
    constructor(a,b) {
        this.a = a
    }
}
class class2 {
    a:number
    static d:string
    constructor(a,b,c,d,e,f) {
        this.a = a
    }
}
// 上面 class2 和 class1 构造函数完全不一样
let instance1:class1
let instance2:class2
instance1=instance2! // 可以赋值，instance2后面的 '!' 是对 instance2进行非空判断，防止严格模式下报错

/**
 * 类型保护： 窄化判断范围，更精确的推断类型
 * f4_0(arr:number[]|string) 这种联合类型的情况下很有用
 */
function f4_0(arr:number[]|string){
    // arr.forEach() // 报错
    if (typeof arr=="object") { // 窄化判断范围，更
        let _arr = arr
        _arr.forEach(() => {})
    } else if (typeof arr=="string") {
        let _arr = arr
    }
}