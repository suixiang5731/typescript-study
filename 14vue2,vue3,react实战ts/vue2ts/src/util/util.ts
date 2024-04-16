export interface timeData {
    time: string,
    name: string | number,

    [propsName: string]: string | number
}

export function sortByTime<T extends timeData>(arr: T[]): T[] {
    let _arr: T[] = []
    _arr = arr.sort((a: T, b: T) => {
        // 使用 断言 any消除错误的方式 -- 不推荐
        // return <any>new Date(a.time) - <any>new Date(b.time)
        // 正常写法，变成他想要的类型再运算，使用 '.getTime()' -- 推荐
        return new Date(a.time).getTime() - new Date(b.time).getTime()
    })
    return _arr
}