function plus(x) {
    return x + 1;
}

console.log(plus(1));

let square = function(num) {
    return num * num;
}

console.log(square(13));

// 函数的简洁写法——箭头函数：使用=>来分隔参数列表和函数体
const plus1 = x => x+1;
const square1 = x => x * x;
console.log(plus1(5));
console.log(square(6));

