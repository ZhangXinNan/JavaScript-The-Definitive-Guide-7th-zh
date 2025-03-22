

// 双斜杠后是注释

// 声明一个叫x的变量
let x;
console.log(x);

x = 0;          // 整数
x = 0.01;       // 实数
x = "hello world";  // 文本字符串
x = 'JavaScript';
console.log(x);
x = true;           // 布尔值
x = false;
x = null;           // 没有值
x = undefined;      // 与null类似


// 对象，类似于python的字典dict
let book = {topic: 'JavaScript', edition: 7};
console.log(book);

// 使用.或者[]来访问对象的属性
console.log(book.topic)
console.log(book["edition"])
// 通过赋值创建新属性
book.author="Flanagan";
book["contens"] = {}
console.log(book);
// 使用?.条件式访问属性
console.log(book.contens?.ch01?.sect1)

// 数组，类似于python的数组list
let primes = [2, 3, 4, 5];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length - 1]);
// 通过赋值添加新元素
primes[4] = 9;
console.log(primes);
// [ 2, 3, 4, 5, 9 ]
primes[8] = 88;
console.log(primes);
// [ 2, 3, 4, 5, 9, <3 empty items>, 88 ]

// 数组和对象可以保存数组和对象
let points = [{x:0 ,y:0}, {x:1, y:1}];
let data = {trial1: [[1,2], [2,3]], trial2: [[1,2], [2,3]]}
console.log(points);
console.log(data);

