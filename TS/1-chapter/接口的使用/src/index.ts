// 学习 TS 就是学习 TS中的类型

/*

	接口  抽象类（有抽象和非抽象的）和接口（都是抽象的），接口没有具体实现
	用来描述形状的（结构）定义 接口到时候让用户去实现

	描述形状（对象，函数，类，混合类型）
	定义一些  没有实现的内容


*/


// 函数
// const getFullName = (
// 	{ firstname, lastname }: { firstname: string, lastname: string } // 可以这么写，但是有些丑陋 不优雅
// 	) => {
// 	return firstname + lastname
// }

// getFullName({firstname: '小', lastname: '铜钱'})

// ==========================================
// 给类型起个别名
// type IFullname = { firstname: string, lastname: string }
// const getFullName = (
// 	{ firstname, lastname }: IFullname
// 	) => {
// 	return firstname + lastname
// }

// getFullName({firstname: '小', lastname: '铜钱'})




// 接口形式
interface IFullname {
	firstname: string,
	lastname: string
}
const getFullName = (
	{ firstname, lastname }: IFullname
	) => {
	return firstname + lastname
}

getFullName({firstname: '小', lastname: '铜钱'})


// ==========================================
// interface 和 type 的区别
// interface 通常描述 对象，类的结构比较多
// type 来描述函数的签名，联合类型，工具类型，映射条件类型
// 在描述的时候，尽量用 type 不能用的时候 考虑 interface

// type 的优点
// 可用联合类型，不能重名
// interface 能重名，可以被扩展和实现 继承  混合类型


// 方法计数器  调用 + 1
// type ICounter = () => number
// const counter:ICounter = () => {
// 	return counter.counter++
// }
// counter.counter = 0

// 用接口描述函数  混合类型
interface ICounter {
	(): number // TODO：注意 接口里都没有做实现，只是描述
	counter: number
}

// 这里为什么不能用let 声明呢？let 声明的变量可以修改，修改后属性可能访问不到，不安全
const counter:ICounter = () => {
	return counter.counter++
}
counter.counter = 0




// ==========================================
// 对象采用接口来实现，描述后端返回的数据结构
// TODO: 对象，就想到了，属性多属性少的情况
// 接口叫抽象的没有具体实现
// interface IVeg {
// 	color: string
// 	taste: string
// 	size: number
// }



// 断言后可以直接赋值多余属性
// let veg : IVeg = {
// 	color: '红色',
// 	taste: '苦涩',
// 	size: 20,
// 	xxx: 1 // 多余属性
// } as IVeg // 暴力断言


// 可选属性
// interface IVeg2 {
// 	color: string
// 	taste: string
// 	size: number
// 	xxx?: number // 不够灵活，
// }
// let veg : IVeg2 = {
// 	color: '红色',
// 	taste: '苦涩',
// 	size: 20,
// 	xxx: 1 // 多余属性
// }

// 基于当前类型声明一个新的类型
// interface IVegWithX extends IVeg {
// 	xxx?: number
// }

// let veg3 : IVegWithX = {
// 	color: '红色',
// 	taste: '苦涩',
// 	size: 20,
// 	xxx: 1 // 多余属性
// }



// 同名接口可以合并
// interface IVeg {
// 	xxx?: number
// }

// interface IVeg {
// 	color: string
// 	readonly taste: string
// 	size?: number
// 	// 对象的key 可以有三种类型 string number symbol
// 	[key: string]: any // 描述其他属性
// }


// let veg: IVeg = {
// 	color: '红色',
// 	taste: '苦涩',
// 	size: 20,
// 	xxx: '啊哈哈',
// 	bbb: 123
// }

// 1）断言后可以直接赋值，但是不能获取多余的属性，因为不知道有没有
// 2）采用可选属性来标识
// 3）基于当前类型声明一个新的类型
// 4）同名接口可以合并
// 5）可以采用任意类型

// ==========================================
// readonly

// interface IVeg {
// 	color: string
// 	taste: string
// 	readonly size: number
// }

// ==========================================
// 索引类型
interface IArr {
	[key: number]: any // key 只能是数字
}
const arr:IArr = [1, 2, 3]

const obj: IArr = {
	0: 100,
	2: 200,
	'3': 300
}

// 可以通过索引访问符，来访问接口中的属性类型
interface Person {
	name: string
	age: string
	address: {
		num: 123
	}
}

// 无法访问“Person.name”，因为“Person”是类型，不是命名空间。是否要使用“Person["name"]”检索“Person”中“name”属性的类型?ts(2713)
// type PersonName = Person.name // 获取 key 的类型

type PersonName = Person['name'] // string => type PersonName = string

// type PersonNum = Person['address']['num']


// 获取key
type PropTypeUnion = keyof Person
// type PropTypeUnion = 'name' | 'age' | 'address'
let x: PropTypeUnion = 'address' // name age address

// 获取值
type PropTypeValueUnion = Person[keyof Person]
// 等价于以下
// type PropTypeValueUnion = string | {
// 	num: 123;
// }


// 如有有任意符的时候，就是any了
// interface Person {
// 	name: string
// 	age: string
// 	address: {
// 		num: 123
// 	}
// 	[key: string]: any // 如果写了任意类型，则取出来的val 就是任意类型
// }

// type PropTypeValueUnion2 = Person[keyof Person] // type PropTypeValueUnion2 = any

// 接口最常用的就是描述对象，可以通过索引操作[] 来访问内部类型
// ==========================================
// 接口描述类  描述类中的属性和方法

interface Speakable {
	name: string
	speak(): void // 原型方法
	// speak: () => void // 实例方法
}

interface Speakable {
	name: string
	speak(): void
}
interface SpeakChinese {
	speakChinese(): void
}

interface SpeakEng extends Speakable {
	speakEng(): void
}

// class Speak implements Speakable, SpeakChinese {
// 	speakChinese(): void {
// 		throw new Error('Method not implemented.')
// 	}
//
// 	name!: string
// 	// 这里既兼容原型方法，也兼容实例方法
// 	speak(): void {
// 		throw new Error('方法没有 implements')
// 	}
// }

class Speak implements Speakable, SpeakChinese {
	name!: string
	speak(): void {
		throw new Error('Method not implemented.')
	}
	speakChinese(): void {
		throw new Error('Method not implemented.')
	}
}


class Speak2 implements SpeakEng, SpeakChinese {
	speakEng(): void {
		throw new Error('Method not implemented.')
	}
	
	speakChinese(): void {
		throw new Error('Method not implemented.')
	}

	name!: string
	// 这里既兼容原型方法，也兼容实例方法
	speak(): void {
		throw new Error('方法没有 implements')
	}
}

// 知道就行

// ==========================================

// 描述实例
// 描述构造函数类型，类类型，描述的是实例
// 想要获取到类本身的类型，需要采用 typeof 获取
// class Person {

// }
// type PersonType =  typeof Person

// function createInstance(clazz: PersonType): Person {
// 	return new clazz()
// }


// let instance = createInstance(Person)


// ==========================================
// 
class Animal {

}
class Meat {}

type PersonType =  {
	new (): any
}

function createInstance(clazz: PersonType): Meat {
	return new clazz()
}


let instance = createInstance(Animal)

// typeof Animal -> new (): Animal












































































export {}



















