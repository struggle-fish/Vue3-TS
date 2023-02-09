// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。

let x: [string, number];
x = ['hello', 10]; // OK

// x = [10, 'hello']; // Error

// >> 1、当访问一个已知索引的元素，会得到正确的类型：
// console.log(x[0].substr(1)); // OK

// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'


// >> 2、当访问一个越界的元素

// 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。
// TODO: 以下官方说可以，运行的时候提示上面的错误信息
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型



export {}