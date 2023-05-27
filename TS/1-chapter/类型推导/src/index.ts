// 学习 TS 就是学习 TS中的类型

/*
	兼容性问题

		子类型可以赋予给父类型

		结构上来看是否兼容

		TS 中结构化的类型系统  鸭子类型 => 长得一样就OK

		叫声很像鸭子，走路很像鸭子，那它就是鸭子


		两个类型名字不一样，但是无法区分
		
*/
// 两个类型名字不一样，但是无法区分
type a = number
type b = number

// 结构化兼容

let obj: {
	toString(): string
}

let str: string = 'abc'

// 这两个类型，单从类型层级来看，是不存在父子关系的

// TODO：以下居然能赋值成功
// TODO：可以把 string 看成 一个对象 基于 toString 扩展了其他的功能
obj = str // 兼容性  子类可以赋值给父类

// 字符串其他的方法不可以调用
obj.toString()// 安全性  保证使用的时候不会发生异常

// ==============================================================================

type xxx = keyof string  // 看看字符串上有多少属性




// ==============================================================================
// 接口类型

interface IAnimal {
	name: string
	age: number
}

interface IPerson {
	name: string
	age: number
	address: string
}

// TODO: 以下称之为赋值，赋值就得严格满足 IAnimal ，赋值就会报错，不会兼容 
// let animal: IAnimal = {
// 	name: 'string',
// 	age: 123,
// 	address: 'string'
// }


let animal: IAnimal
let person: IPerson = {
	name: '小铜钱',
	age: 12,
	address: ''
}

// 这样就OK  兼容性 你要的我都有    可以理解成 人是动物扩展出来的子类
animal = person

// 把一个类型赋给另一个类型，才会涉及到兼容
// 子 父关系不要考虑  谁多谁少，，考虑的是父子类型的层级关系
// ==============================================================================

// 函数的兼容性

let sum1 = (a: string, b: string) => {
	return a + b
}
let sum2 =  (a: string) => {
	return a
}

// sum1 = sum2  // OK
// TODO: 安全性考虑 
// sum2 = sum1  // NO


// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
[1, 2, 45].forEach((item, index, idx) => {
	console.log(item)
});
// TODO: 对于函数的参数来讲，少的可以赋予给多的  内部实现可能传递了多个，我用的少，就安全，如果多写了，就不安全了


let sum3!: () => string | number
let sum4!: () => string

// sum3 = sum4 // OK

// sum4 = sum3 // NO


// ==============================================================================
// 类的兼容性  结构类型检测

// class A {
// 	name!: string
// }

// class B {
// 	name!: string
// }

// let a:A = new B() //  不是父子关系

// ==============================================================================

// 加了修饰符就不行了
// class A {
// 	private name!: string
// }

// class B {
// 	private name!: string
// }

// let a:A = new B() //  报错

// ==============================================================================



// 类型分为两种：结构化类型  标称类型

// type BTC  = number
// type USDT = number

// let btc: BTC = 100
// let usdt: USDT = 100

// function getCount(count: BTC) {
// 	return count
// }
// getCount(usdt) // 传错了，但是却没报错

// ==============================================================================
// 标称类型
class AddType<S> {
	private _type!: S
}
type NewType<T, S extends string> = T & AddType<S>
type BTC  = NewType<number, 'btc'>
type USDT = NewType<number, 'usdt'>

let btc: BTC = 100 as BTC
let usdt: USDT = 100 as USDT

function getCount(count: BTC) {
	return count
}
// getCount(usdt) // 传错了，但是却没报错
getCount(btc)


















export {}



















