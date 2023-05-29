// 学习 TS 就是学习 TS中的类型

/*
	unknown 和 any 都是顶级类型  unknown 是 any 的安全类型


	any 随意 不进行类型检查了
	unknown 还是要检查的  相对于 any 来说 在没有确定 类型之前，是不能当做 函数  类 对象 操作的

	类型保护

	

*/

// =====================================================================================================
// unknown 和 any 都是顶级类型  unknown 是 any 的安全类型

let c: unknown = 1
function isFunction(val: unknown): val is () => void {
	return typeof val === 'function'
}
function isString(val: unknown): val is string {
	return typeof val === 'string'
}

// TODO: unknown 在使用前必须要类型判断下
if (isFunction(c)) {
	c()// 此时 c 被当做函数来使用
}

// =====================================================================================================

// unknown 的小特点
type unionUnkown = unknown | null | undefined | string // type unionUnkown = unknown

type interUnknown = unknown & string // type interUnknown = string

// 经常 泛型要求是字符串的时候 通常这么些  T & string

// 索引查询
// type isNever = keyof unknown // 没有索引，就是 never type isNever = never

// type Compute<T> = {
// 	[X in keyof T]: T[X]
// }

// type X = Compute<unknown> // type X = {}

// =====================================================================================================
// 内置类型：集合 条件 Exclude  Extract NonNullable ReturnType Parameters InstanceType

// 常用内置类型  基于对象操作的  映射类型

// 映射
type A1 = {
	name: string
}
type A2 = {
	age: number
}
type Compute<T> = {
	[K in keyof T]: T[K] // 映射 in
}

// 映射的伪代码大志如下
// for (let key in 'name' | 'age' | 'xxx') {
// 	T[key] // 获取值
// }


type A1A2 = Compute<A1 & A2>

// type A1A2 = {
// 	name: string;
// 	age: number;
// }

// =====================================================================================================

// 内置类型中 有对对象属性 进行修饰操作的
// 必须 Required 可选 Partial 只读 Readonly 通过映射类型 in 添加 ?  readonly -? 修饰符的
interface Company {
	num: number
	name: string
}
interface Person<T = any> {
	name: string
	age: number
	company: T
}

type Partial<T> = {
	[K in keyof T]? : T[K] // 将所有属性都添加了可选标识 默认只做了第一层处理
}



type DeepPartial<T> = {
	[K in keyof T]? : T[K] extends object ? DeepPartial<T[K]> : T[K]
}

// 可选属性
type withCompany = Partial<Person<Company>>
type withDeepCompany = DeepPartial<Person<Company>>

let person: withCompany = {
	company: {
		name: '名字',
		num: 12
	}
}
let person2: withDeepCompany = {
	company: {
		num: 12
	}
}

// 必填属性
type Required<T> = {
	[K in keyof T]-? : T[K]
}

type DeepRequired<T> = {
	[K in keyof T]-? : T[K] extends object ? DeepRequired<T[K]> : T[K]
}

type withCompanyR = Required<Person<Company>>
let person3: withCompanyR = {
	name: '',
	age: 12,
	company: {
		num: 12,
		name: ''
	}
}

type withCompanyRD = DeepRequired<Person<Company>>

let person4: withCompanyRD = {
	name: '',
	age: 12,
	company: {
		num: 12,
		name: ''
	}
}


// 只读属性
type Readonly<T> = {
	readonly [K in keyof T]: T[K]
}

// 去掉只读属性
type DeepMutate<T> = {
	-readonly [K in keyof T]: T[K]
}



type withReadonly = Readonly<Person<Company>>
type withNoReadonly = DeepMutate<Person<Company>>


// =====================================================================================================
// 最最最最重要的两个  Pick Omit 对象的结构操作 是针对的是对象类型的操作
// Pick 精挑细选  在对象中挑选某些属性
// Omit 忽略   去掉某些属性

// 注意：Exclude  Extract 是针对的是集合操作


type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}
// 把 Person 中的 name age 取出来
type PickPerson = Pick<Person, 'age' | 'name'>

// keyof any 是啥  keyof unknown 是 never
// type a = keyof any // type a = string | number | symbol

// keyof T 表示所有的属性
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>> // 从所有的属性T	里挑Exclude出你传过来的K，就是需要的
type OmitPerson = Omit<Person, 'age' | 'name' | 'xxx'>

// =====================================================================================================
// Record  取代 object

let obj: object = {
	name: '小铜钱',
	age: 12
}

// 对 obj 做映射
function map(obj: any, callback: (item: any, key: any) => any ){
	let result = {} as any

	for (let key in obj) {
		result[key] = callback(obj[key], key) // {} 空对象不能取值
	}
	return result
}
map(obj, (item, key) => {
	return item + key
})

// { name: '小铜钱name', age: '12age' }


// Record<string, number> = { string: number }
// Record<'name' | 'age', number> = { name: number, age: number }
// Record<'name' | 'age', {a:1, b: 2}> = { name: {a:1, b: 2}, age: { a: 1, b: 2 } }
type Record<K extends keyof any, T> = {
	[P in K] : T // 给啥就循环啥
}


// T extends object -> T extends Record<string, any>
let obj2: Record<string, any> = {
	name: '小铜钱',
	age: 12
}

// let a1: Record<'name' | 'age', {a:1, b: 2}> = { name: {a:1, b: 2}, age: { a: 1, b: 2 } }

function map2<K extends string, V, R>(obj: Record<K, V>, callback: (item: V, key: K) => R ){
	let result = {} as Record<K, R>

	for (let key in obj) {
		result[key] = callback(obj[key], key) // {} 空对象不能取值
	}
	return result
}
// 1、根据传入的值进行类型推导， name 和 age 赋予给K  '小铜钱 ' 12 赋予给V
// 2、拿到 callback 的返回值 R 会自动根据返回值来进行推导出来是 string （string | number + string  = string）
// 3、映射成一个新的 Record 新的 Record 有 K 和 R 组成
map2({ name: '小铜钱', age: 12 }, (item, key) => {
	return item  + key
})

map2(obj2, (item, key) => {
	return item  + key
})
// =====================================================================================================


























// =====================================================================================================
















































export {}



















