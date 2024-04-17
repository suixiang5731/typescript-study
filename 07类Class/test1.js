class JsClass {
    a=888
    static c=999
    constructor() {
        this.a=a
    }

}
// 老版本js中没有static关键字的时候，使用下面语句定义静态属性
JsClass.c=999