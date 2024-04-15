/*function sort(arr: []): [] {
    return []
}
sort("")*/
/*
let obj ={
    length: 1,
    type: "asd"
}
obj.types

let a:string="asd"

a=123
a.slice()*/
/*

let a:string="asd1"
function b(b1: String, b2: String): string {
    console.log(a)
    return "hello"
}
b("a","b")*/

// string, number, boolean, null, undefined, symbol
// null 和 undefined 可以说是任何类型的子类
// tsconfig.json 开启严格模式("strict": true,)的时候 let c:boolean = null 会报错，否则不会报错
let a:string = "asd"
let b:number = 12
let c:boolean = false
// let c:boolean = null
let d:undefined = undefined

// 字面量类型，用于规定变量只能是某几个值的情况
// let ENV:"production"|"development"|"test"="test" // 正确
// let ENV:"production"|"development"|"test"="add" // 报错
// let NUM:1|2|3=4
// 设置某个变量有多个类型
let a1:string|number|boolean=false

/**
 * 大小写问题
 * string 是 基元类型
 * String 是 包装器类型
 */
let f1:string = "aaa"
let f2:String = new String("aaa")
let f3:String = "aaa"