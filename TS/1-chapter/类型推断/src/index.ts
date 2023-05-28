// 学习 TS 就是学习 TS中的类型

/*
	类型推断和类型保护


	


*/

// 类型推断 从右边向左边流动
// 赋值推断
let name = '小铜钱' // let name: string



// 函数的返回值可以自动推断
function sum(a: string, b: string) {
	return a + b
}


// 声明函数类型 反向推断  从左到右 上下文类型
type ISum = (x: string, y: string) => string
// 先写类型，在赋值，就是从左到右推断
const sum2: ISum = (a, b) => {
	return a + b
}


type ICallback = (x: string, y: string) => void // void 表示不关心返回值
// 会根据上下文推断
function fn(cb: ICallback){
	let r = cb('a', 'b') // let r: void  调用函数后不会根据返回值来推导，默认采用上下文中的声明类型

}
fn((a, b) => {
	return 'abc'
}) // a: string 函数的参数 推断是根据上下文类型的位置进行推断的


// void 为什么设计成不关心
// void 意味着 用户可以写返回值，实际上用不用的到，没所谓

// ==========================================================================================


// 类型保护

// ts 默认在使用的时候，都是联合类型，不能直接使用联合类型，需要识别类型
// typeof 类型保护
// instanceof 类型保护
// in
function double(a: string | number) {
	// 需要缩短类型 对不同的类型进行范围缩小
	if (typeof a === 'string') {
		return a + a
	} else {
		a * 2
	}
}
// ==========================================================================================

class Person {}
class Dog {}

function getInstance(clazz: new(...args: any[]) => Dog | Person) {
	return new clazz()
}

let p = getInstance(Person)

if (p instanceof Person) {
	console.log(p)
}
// ==========================================================================================

interface Bird {
	fly: string
	kind: '鸟'
}

interface Fish {
	swim: string
	kind: '鱼'
}
// 可辨识类型
function getType (type: Bird | Fish) {
	if ('fly' in type) {
		// 
	} else if ('swim' in type) {
		// 
	}
}



// ==========================================================================================

// 确保一个变量是数组
// 用类型来辨识  可辨识的联合类型
function ensureArray<T>(input: T | T[]): T[] {
	if (Array.isArray(input)) {
		return input
	} else {
		return [input]
	}
}

// =====================================================================================================
// null 保护


function addPrefix(num?: number) {
	num = num || 0 // 给一个默认值
	return function (prefix: string) {
		// return prefix + num?.toFixed(2) // num 跨函数了，就没法自动检测了
		return prefix + num!.toFixed(2)
	}
}

addPrefix()('$')


// =====================================================================================================
// ts 中的is 语法  工具方法中判断类型的时候， 全部需要使用 is 语法
function isBird(val: Bird | Fish): val is Bird {
	return val.kind === '鸟'
}
function getType3(val: Bird | Fish) {
	if (isBird(val)) {
		// val 是什么
		val.fly
	}
}

























// =====================================================================================================


















export {}



















