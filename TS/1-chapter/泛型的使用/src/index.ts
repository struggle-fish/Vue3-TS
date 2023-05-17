// 学习 TS 就是学习 TS中的类型

/*

	泛型类似于函数的参数，只不过它接受的是类型
	泛型的声明一般采用一个大写字母表示·

	泛型可以用于 函数 对象 类

	当使用的时候才可以确定类型


	泛型 使用的时候在去确认类型  ，而且还会根据传入的值进行推导，值也不是必须传的


	泛型可以指定默认值  默认泛型


	泛型约束  对参数约束  约束传入的泛型类型  extends
	约束就是，约束了这个参数能是什么类型

	
*/


// class Animal {}

// class Meat {}

// interface Clazz {
// 	new(): any
// }

// // typeof Clazz -> new(): Clazz

// function createInstance(clazz: Clazz) {
// 	return new clazz()
// }

// let instance = createInstance(Meat)


// ===================================

class Animal {}

class Meat {}

interface Clazz<T> { // T 就是个形参
	new(): T
}

// typeof Clazz -> new(): Clazz

function createInstance<T>(clazz: Clazz<T>) {
	return new clazz()
}

let instance = createInstance<Meat>(Meat) // Meat 这里就是实参

let instance2 = createInstance<Animal>(Animal)
let instance3 = createInstance(Animal)


// ===================================
// 泛型可以用于 函数 对象 类

// 根据长度和内容创建一个数组

// const getArray = (times: number, val: string): string[] => {
// 	let result = []

// 	for (let i = 0; i < times; i++) {
// 		result.push(val)
// 	}
// 	return result
// }


// val 这里写死成 字符串了，不够随意，如果想改成数字怎么整？
// getArray(3, 'abc') // ['abc', 'abc', 'abc']

// ===================================
// 入参 和 返回值要求是相同的  有映射关系
// 
const getArray = <T>(times: number, val: T): T[] => {
	let result = []

	for (let i = 0; i < times; i++) {
		result.push(val)
	}
	return result
}

// 当使用的时候才可以确定类型
getArray(3, 123) // => getArray<number>(3, 123)

getArray(3, '234') // getArray<string>(3, '234') 



// ===================================
// 多个泛型
// 元祖交换

// function swap(tuple: [string, number]): [number, string] {
// 	return [tuple[1], tuple[0]]
// }

// swap(['小铜钱', 20])





// function swap<T, U>(tuple: [T, U]): [U, T] {
// 	return [tuple[1], tuple[0]]
// }
// swap(['小铜钱', 20])

// swap(['小铜钱', true])



// T, U 泛型参数，，也叫泛型坑位 占位置用的
const swap = <T, U>(tuple: [T, U]): [U, T] => {
	return [tuple[1], tuple[0]]
}

type ISwap = <T, U>(tuple: [T, U]) => [U,	T]
// interface ISwap {
// 	<T, U>(tuple: [T, U]): [U,	T]
// }



const swap2: ISwap = (tuple) => {
	return [tuple[1], tuple[0]]
}
swap2(['a', true]) // const swap2: <string, boolean>(tuple: [string, boolean]) => [boolean, string]


// ===================================
// 只要有映射关系，就首先想到泛型  输入 跟输出有映射关系
// const forEach = <T>(arr: T[], callback: (item:T, idx: number) => void) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		callback(arr[i], i)
// 	}
// }


// forEach([1,2,3], function(item, idx) {
// 	console.log(item)
// })

// forEach(['a', 'b', 'c'], function(item, idx) {
// 	console.log(item)
// })


// ===================================
// type ICallback<T> = (item:T, idx: number) => void  // 使用接口的时候确定了类型
// type ICallback1 = <T>(item:T, idx: number) => void  // 跟上面的写法有什么区别 ，在调用函数的时候确定了类型

// const forEach = <T>(arr: T[], callback: ICallback<T> ) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		callback(arr[i], i) // callback 没有执行，所以无法推导 arr[i] = T
// 	}
// }


// forEach([1,2,3], function(item, idx) {
// 	console.log(item) // ICallback1 => callback 没有执行，所以无法推导 arr[i] = T
// })

// forEach(['a', 'b', 'c'], function(item, idx) {
// 	console.log(item)
// })


// ======================================================================================

type ICallback<T> = (item:T, idx: number) => void  // 使用接口的时候确定了类型
type ICallback1 = <T>(item:T, idx: number) => void  // 跟上面的写法有什么区别 ，在调用函数的时候确定了类型


type IForEach = <T>(arr: T[], callback: ICallback<T>) => void

const forEach: IForEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i) // callback 没有执行，所以无法推导 arr[i] = T
	}
}


forEach([1,2,3], function(item, idx) {
	console.log(item) // ICallback1 => callback 没有执行，所以无法推导 arr[i] = T
})

forEach(['a', 'b', 'c'], function(item, idx) {
	console.log(item)
})


// ======================================================================================

// 默认泛型

// 一个未知类型，和一个 number 类型的联合类型
type Union<T> = T | number

// 给泛型增加默认值

type Union2<T = string> = T | number // 场景： 用户不传入的时候，希望有个默认值

type t1 = Union2 // type t1 = string | number
type t2 = Union<boolean> // type t2 = number | boolean



type ToArray<T> = T | T[]
type Union3<T = string> = ToArray<T> | number
type t3 = Union3 // type t3 = number | ToArray<string>

// ======================================================================================
// 泛型约束  对参数约束  约束传入的泛型类型  extends

// A extends B  => A 是 B的子类型

// 此方法传入number => number  string => string
// boolean => 错误的
// function handle<T>(val: T): T {
// 	return val
// }

// let r = handle(123)
// let r2 = handle('abc')
// let r3 = handle(true)

// ======================================================================================

function handle<T extends number | string>(val: T): T {
	return val
}

let r = handle(123)
let r2 = handle('abc')
// let r3 = handle(true) // 类型“boolean”的参数不能赋给类型“string | number”的参数。


// ======================================================================================
// 约束属性
interface IWith {
	length: number
}

function getLen<T extends IWith>(val: T) {
	return val.length
}

getLen({ length: 1233 })
getLen('abc') // 'abc' 为什么是 IWith 子类型  => 把字符串幻想成一个基于对象扩展的类型
getLen((a: number, b: string) => {})

// ======================================================================================

// 约束对象里的 key => 即约束索引签名

// function getVal<T extends object>(obj: T, key: string) {
// 	return obj[key] // 在类型 "{}" 上找不到具有类型为 "string" 的参数的索引签名
// }

// getVal({ a: 1, b: 2, c: 3 }, 'c')



// 索引查询 keyof 
// 约束了索引的签名, 约束就是，约束了这个参数能是什么类型
function getVal<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key] // 在类型 "{}" 上找不到具有类型为 "string" 的参数的索引签名
}

getVal({ a: 1, b: 2, c: 3 }, 'c') // 也就是key 这个参数必须得是 a b c 中的某一个

// getVal({ a: 1, b: 2, c: 3 }, 'd') // 类型“"d"”的参数不能赋给类型“"a" | "b" | "c"”的参数。ts(2345)


// ======================================================================================
// 条件类型  配合 泛型约束来使用


// 看成参数 => 不传参数怎么处理  传了类型不对怎么处理

// ======================================================================================
// 泛型在对象和类中使用
// 描述接口的返回值
// 后端返回的 code: 200 data  message
// 给所有 定义统一接口
interface ApiResponse<T = any > {
	code: number
	data: T // T占位符，
	message?: string
}

interface LoginRes {
	token: string
}

function toLogin(): ApiResponse<LoginRes> {
	return {
		code: 200,
		data: {
			token: 'xxx'
		},
		message: ''
	}
}

// 希望调用方法后就能拿到类型
// toLogin().data.token


// ======================================================================================

interface A { // 对于对象来说，以下两种写法有啥区别
	a(): void
	a: () => void
}


// ======================================================================================
// 类中使用泛型

// 求类表中的最大值  调用的时候可以限制传入的类型

class MyList<T extends number | string>{
	private arr: T[] = []
	add(val : T) {
		this.arr.push(val)
	}

	getMax(): T {
		let arr = this.arr
		let max = arr[0]
		for (let i = 0; i < arr.length; i++) {
			let cur = arr[i]
			cur > max ? (max = cur) : void 0
		}
		return max
	}
}

let list = new MyList<number>()
list.add(12)
list.add(100)

// 泛型 可以用在函数  对象  类  工具类型
// 2个重要 默认值  泛型约束 
// ======================================================================================


// 交叉类型（交集） 会把多个类型变成一个类型  &  都要满足
// 联合类型（并集）|

// interface P1 {
// 	handsome: string
// }
// interface P2 {
// 	hight: string
// }

// // type P = P1 | P2 // 联合类型是或者的关系  => 只高  只帅  又高又帅 
// // let p: P = {
// // 	handsome: '帅'
// // } 

// type P = P1 & P2 // 交叉类型 是  都要满足  => 又高又帅
// let p: P = {
// 	handsome: '',
// 	hight: ''
// }


// ======================================================================================

// interface P1 {
// 	handsome: string
// 	address: {
// 		n: string
// 	}
// }

// interface P2 {
// 	hight: string
// 	address: {
// 		n: number
// 	}
// }

// type P = P1 & P2
// 交叉类型 ，交叉出来的结果，可以赋予给A 也可以赋予给B
// 生成的交叉类型 是 A B的子类，内部的嵌套类型也会做交叉类型  交叉后的结果，涵盖所有
// let p: P = {
// 	handsome: '',
// 	hight: '',
// 	address: {
// 		// 内部的嵌套类型也会做交叉类型
// 		n: 'a'// 不能将类型“string”分配给类型“never”。ts(2322)
// 	}
// }

// ======================================================================================
// 合并两个对象
function mixin<T,U>(a: T, b: U) {
	return {
		...a,
		...b
	}
}

let res = mixin({
	a: 1, b: 2
}, {c: 3, b: 'a'})

res.b // never

// 交叉后的结果，涵盖所有

type Compute<T> = { [P in keyof T] : T[P] }

type rr = Compute<typeof res> 
/*

type rr = {
    a: number;
    b: never;
    c: number;
}

*/
























































export {}



















