// 学习 TS 就是学习 TS中的类型

/*

		函数中的类型
			对于函数来说 主要关心的是 函数的入参的类型  函数的返回值类型


*/


//


// 函数的声明方式
// function 关键字  function 关键字不涉及到变量类型的标注
function sum(a: string, b: string): string {
	return a + b
}


// 表达式
// let sum2 = function (a: string, b: string): string {
// 	return a + b
// }



// 对于表达式声明而言，可以给变量重新赋值

// sum2 的类型是啥  不写就是自动推导出来了
let sum2: (a: string, b: string) => string = function (a, b): string {
	return a + b
}


// 什么时候需要给 sum2 标注类型
// 表达式，如果给变量写好了一个类型，就意味着我们赋予的值要满足这个类型  有校验的功能

// 类型别名
type SumType = (a: string, b: string) => string
let sum3: SumType = function (a, b): string {
	return a + b
}


// 记住这种对象标注的写法，签名
let sum4: { (a: string, b: string): string } = function (a: string, b: string): string {
	return a + b
}


// 函数的所有特性 都支持  可选参数  默认参数  剩余运算符  这些都要放最后

// ? 表示参数可选  b 可传可不传
type SumType2 = (a: string, b?: string) => string
let sum5: SumType2 = function (a, b): string {
	return a + b
}
sum5('a')


// 默认参数 =  js的默认值
type SumType3 = (a: string, b?: string) => string // 这叫类型

// 把这个函数赋值到了 SumType3 类型上 b = 'bb' 这是值，值才可以给默认值
let sum6: SumType3 = function (a, b = 'bb' ): string {
	return a + b
}
sum6('a')


// let sum7 = function (a, b?: string = 'bb'): string {
// 	return a + b
// }





// 剩余参数
let sum8 = function (a: string,  ...args: string[]): string {
	return args.reduce((memo, current) => memo + current, a)
}
let r = sum8('a', 'b', 'c', 'd')
console.log(r)




const person = {
	name: '小铜钱',
	age: 18
}
// => getName(this: any, key: string)
// "this" 隐式具有类型 "any"，因为它没有类型注释
// function getName(key: string) {
// 	return this[key]
// }

// getName.call(person, 'name')


// 两个关键字  typeof  keyof

// typeof 取变量的类型， 返回的是类型
type Person = typeof person

/*
type Person = {
	name: string;
	age: number;
}
*/



function getName2(this: Person, key: string) { // 这里的key 为什么不安全，传递一个对象的时候，如果取了一个不存在的属性，是不是就不安全了
	return this[key] // 元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型 "{ name: string; }"。在类型 "{ name: string; }" 上找不到具有类型为 "string" 的参数的索引签名
}

// 把 person 里的key 在拿出来
type PersonKey = keyof Person // => type PersonKey = "name" | "age"

function getName3(this: Person, key: PersonKey) {
	return this[key]
}
getName3.call(person, 'age')

//  this 导致的问题是不方便类型推导，用起来麻烦



// =============================================

// 函数的重载
// 重载的概念是后端的概念？ 后端的定义一些同名的方法，通过定义不同的输入来区分这些方法

// js不支持函数的重载，ts也不支持，所以ts中的函数重载（伪重载）对参数的区分
// js 可以通过 arguments 来实现重载



// 'abc' => [a, b, c]
// 123 => [1,2, 3]
function toArray(value: number): number[]
function toArray(value: string): string[]
function toArray(value: string | number): string[] | number[] {
	// 只有一个具体的实现
	if(typeof value === 'string') {
		return value.split('')
	} else {
		return value.toString().split('').map(Number)
	}
}

let arr1 = toArray('123')
let arr2 = toArray(12)
let arr3 = toArray('abc')


























































































































export {}



















