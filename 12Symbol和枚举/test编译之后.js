var numList;
(function (numList) {
    numList[numList["a"] = 2] = "a";
    numList[numList["b"] = 3] = "b";
    numList[numList["c"] = 4] = "c";
    numList[numList["d"] = 5] = "d";
})(numList || (numList = {}));
// 根据上面的代码可以得知，枚举编译以后的最终结果实际为一个如下面所示的对象
let resObj = {
    "a": 2,
    "b": 3,
    "c": 4,
    "d": 5,
    2: "a",
    3: "b",
    4: "c",
    5: "d",
}