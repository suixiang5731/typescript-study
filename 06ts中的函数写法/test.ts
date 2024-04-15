/* 此处如果不写 :number 则可以输入任意类型的值，或者
返回任意类型的值，也即 any*/
function f1(a:number,b?:number):number {
    return a+1
}
// f1() // 不填会报错
// f1(123,2,3) // 多填也会报错
f1(123) // b 可选，可填可不填

// ‘...args:(number|string)[]’ 用于设置可选的后面的多个参数，
// 在函数内 使用 args 获取这些参数
function f1_1(a:number,b?:number,...args:(number|string)[]):number {
    console.log(args)
    return a+1
}

// 设置默认值
function f1_2(a = 3,b?:number,...args:(number|string)[]):number {
    console.log(args)
    return a+1
}
/*下面这样调用会报错，因为给a设置默认值为3时，会使得a的类型被设置为number
也就说，参数类型会被设置为默认值本身的类型*/
// f1_2("12")

let f2:(a:number) => number=function (a) {
    return a+2
}

// this指向
// this:void 虽然占据了第一个参数的位置，但是不会被当成参数，
// 第一个参数依然是 a
function f3(this:void,a:number) {
    console.log(a)
}
f3(223)
/*function f3_1(this:{},a:number) {
    console.log(a)
}
f3_1(223) // 报错 // todo
*/

/**
 * 根据不同类型参数，有不同返回
 * 重载写法如下
 */
// 下面者两个 f4 的定义其实不写也没事
// 实际应用中更多的是使用泛型
function f4(a:number,b:string):string;
function f4(a:number,b:number):number;
function f4(a:number,b:string|number):number|string {
    if (typeof a =="number" && typeof b =="number") {
        return 123
    }
    if (typeof a =="number" && typeof b =="string") {
        return "12345"
    }
    return 123
}