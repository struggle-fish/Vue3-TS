// TODO: 将多个类型合并【多个类型属性和方法的并集】成的类型就是交叉类型。

/*

交叉 (&) 和 联合（|） 的区别

**对于对象类型合成**
的交叉类型是多个类型属性和方法的合并后的类型，属于多个类型的并集，
必须是两个类型的全部属性和方法才能赋值给交叉类型变量。【可选属性和方法除外】


**获取属性和方法区别：**
交叉类型变量可以获取两个类型的任意属性和任意方法，
而联合类型的变量只能获取两个类型的共同属性和方法【交集属性和交集方法】



*/

//定义：将多个类型合并【多个类型属性和方法的并集】成的类型就是交叉类型。
type objtype1 = { username: string; age: number };
type objtype2 = { custname: string; phone: number; age: number };
type objtype3 = { address: string };

let first: objtype1 = { username: "wangwu", age: 23 };
let second: objtype2 = { custname: "lisi", phone: 111, age: 23 };

// 定义：将多个类型合并【多个类型属性和方法的并集】成的类型就是交叉类型。
// TODO: 交叉类型：& 必须包含所有的属性或方法才行
let jiaochatype: objtype1 & objtype2 & objtype3 = {
	username: "wangwu",
	age: 23,
	custname: "lisi",
	phone: 111,
	address: "shanghai",
};

// TODO: 联合类型：| 包含一个或多个就行
let uniontype: objtype1 | objtype2 = {
	username: "wangwu",
	age: 23,
	custname: "lisi",
	phone: 111,
};


export {};
