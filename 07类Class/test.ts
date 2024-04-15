class TsClass {
    public a=123 // 或者直接写 a=123
    static c=999 // 静态属性
    readonly d=888 // 只读属性
    protected f=100 // protected属性
    /**
     * 这里 private f1() 最终编译之后的js代码，该方法依然是共有的
     * 这里的私有主要是在开发过程中防止调用一些不必要的东西，
     * 方便开发，实际项目上线之后，是否共有私有其实无所谓
     */
    private f1() {
        console.log(this.f)
        console.log(1)
    }
}
let tsClass = new TsClass()
// let outA = tsClass.a
// tsClass.f1 // 报错 Property 'f1' is private and only accessible within class 'TsClass'
// tsClass.d=2 // 报错
// tsClass.f // 报错

class TsClass2 {
    a:number
    /*f2(a1:number):string
    f2(a1) {
        return "asd"
    }
    constructor() {
        this.a="123" // 报错
        this.c=1 // 报错
    }*/
}
// ts类可以作为接口
// let obj:TsClass2={a:1,c:2} // 报错，因为 TsClass2 中没有 c
let obj:TsClass2={a:1}

