
// 数组
let a = []
a.push(1,2,3);  // 为数组添加元素
a.reverse();    // 对元素进行排序
console.log(a); // => [3,2,1]

// 给对象增加方法，太灵活了！！！
let points = [{x:0 ,y:0}, {x:1, y:1}];
points.dist = function (){
    let p1 = this[0];   // this引用此对象的第一个元素
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a+b*b);  // 计算平方根
}
console.log(points);
console.log(points.dist()); // => 1.4142135623730951

function abs(x){
    if (x >= 0){
        return x;
    } else {
        return -x;
    }
}

console.log(abs(-5));   // => 5

function sum(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}
console.log(sum([1,2,3,4,5]));  // => 15

function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n -= 1;
    }
    return product;
}
console.log(factorial(4));      // => 24

