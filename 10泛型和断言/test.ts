/**
 * 泛型
 */
// 泛型 示例
// find -> 数组，目标，找出个目标
function find<T>(arg: T[], target: T): T {
    let _res
    arg.forEach(item => {
        if (target === item) _res = item
    })
    return _res
}

// 使用泛型时，会有自动推断
find([1, 2], 1)
find([1, "2", "3"], "3")
find([1, "2", {aa: 1}], "3")
// 不使用自动推断，指定类型
// 另注：不指定则自动推断，指定类型则使用指定的类型
find<string>(["1", "2"], "1")

/**
 * 泛型参数的默认类型§
 * 在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认
 * 类型。当使用泛型时没有在代码中直接指定类型参数，
 * 从实际值参数中也无法推测出时，这个默认类型就会起作用。
 * <上述注释来源 https://ts.xcatliu.com/advanced/generics.html>
 *
 * 例如下面的 find1 函数，此处的 T=number 指定了 泛型的默认值
 * 类型为number
 */
function find1<T = number>(arg: T[], target: T): T {
    let _res
    arg.forEach(item => {
        if (target === item) _res = item
    })
    return _res
}

find1(["1", 2], "1")

// 多个泛型，即多个待定类型
function objExtends<T, U>(a: T, b: U): T & U {
    return Object.assign(a, b)
}

// 多个泛型，设置默认值的写法 <T={}, U={}>
function objExtends1<T = {}, U = {}>(a: T, b: U): T & U {
    return Object.assign(a, b)
}

// 接口泛型
interface inter1<T> {
    a1: T,
    a2: number
}

// interface 泛型在使用时要指定类型 -- ':inter1<string>'
let obj2: inter1<string> = {
    // a1:123, // 报错
    a1: "1",
    a2: 2,
}

// 类泛型
class TestClass<T> {
    a: T

    constructor(a: T) {
        this.a = a
    }
}

new TestClass(1) // 自动推断
new TestClass<string>("1") // 指定类型


// 关于泛型约束 使用 extends 关键字
function find2<T extends number>(arg: T[], target: T): T {
    let _res
    arg.forEach(item => {
        if (target === item) _res = item
    })
    return _res
}

// 设置多个 泛型约束 extends number | string
function find3<T extends number | string>(arg: T[], target: T): T {
    return
}

// find2(["1", "2"], "2") // 报错
find3(["1", "2"], "2")
// 泛型约束可以 extends 任何类型：联合类型，交叉类型，自定义接口等等
// 例如 继承一个接口 -- <T extends inter1<number>>
function find4<T extends inter1<number>>(arg: T[], target: T): T {
    return
}

/**
 * 断言
 * 用于 类型起冲突报错时，强制指定变量类型
 */
interface obj1 {
    a: number,
    b: number,
}

/**
 * 正常直接写let obj:obj1={}
 * 会报错，因为 obj1 中已经定义了a，b字段，
 * 但此处却是个空对象
 */
// let obj:obj1={} // 报错
/**
 * 使用断言 as obj1 可以强制指定 obj 为 obj1 类型，
 * 实现后续再添加相应字段的功能
 */
let obj: obj1 = {} as obj1
obj.a = 1
obj.b = 2

function f1(a: number[] | string) {
    // a.forEach(() => {}) // 报错，因为 a 为string类型时，没有forEach方法
    /**
     * 使用断言强制指定 _a 为 as number[]，从而消除 a.forEach 报错
     *     注意，这种情况下这样写并不好，因为a有为string类型的情况，
     *     最好使用 typeof 或者 instanceof 判断类型
     */
    let _a = a as number[]
    _a.forEach(() => {
    })
}

// 函数接口
interface fn {
    (a: number): string

    a: number
}

// 报错，因为 fn 内部有 a 属性，所以 f2 也必须有 a 属性
/*let f2: fn = function (a: number) {
    return '123'
}
f2.a = 12 // 上面 f2 依然报错
// 上面的这种写法(行138-141)符合 js 语法规则，但是不符合 ts 规则，ts认为 f2 已经指定了fn类型，所以 f2 必须有 a 属性
*/

// 正确写法
let f3_1: fn = function (a: number) { // 写法一
    return '123'
} as fn
let f3_2: fn = <fn>function (a: number) { // 写法二
    return '123'
}
// 写法二 中去掉方法后面的 'as fn'，在 'function (a: number)' 前面加上一个 <fn>


