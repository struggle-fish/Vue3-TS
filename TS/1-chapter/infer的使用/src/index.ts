// 学习 TS 就是学习 TS中的类型

/*


	类型推断 inference infer 

	内置类型
	ReturnType Parameters  InstanceType 


*/


function getUser(name: string, age: number) {
	return {
		name, 
		age,
		address: {}
	}
}



typeof getUser // 这个是获取函数本身的类型

// 获取返回值类型

// infer 只能用在条件类型中，用来提取类型的某一个部分的类型
// 放在不同位置，就可以获取不同位置的类型

// type ReturnType1<T> = T extends (...args: any[]) => any ? '返回值的类型' : never

// TODO: 根据 infer所在的位置 推导出 R的类型
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type T1 = ReturnType<typeof getUser> 

// type T1 = {
// 	name: string;
// 	age: number;
// 	address: {};
// }


// =====================================================================================================

// 获取函数的参数

// type Parameters<T extends (...args: any[]) => any> = T extends (...args: any[]) => any ? '参数类型' : any

type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type T2 = Parameters<typeof getUser> // type T2 = [name: string, age: number]


// =====================================================================================================
// 获取实例的类型
class Person {
	constructor() {
		return {
			a: 1,
			b: 2
		}
	}
} // Person 实例的类型是什么

let p = new Person()

// type InstanceType<T> = T extends { new (...args: any[]): any } ? '实例类型' : never
// type InstanceType<T> = T extends { new (...args: any[]): infer I } ? I : never
// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
type T3 = InstanceType<typeof Person>


// =====================================================================================================
// 构造函数的参数
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

class Person2 {
	constructor(public c?: string) {
		this.c = c
	}
}

type ConstructorParameter<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never
type T4 = ConstructorParameters<typeof Person2> // type T4 = [c?: string | undefined]



// =====================================================================================================
const a = ['小铜钱', 30 , '北京']



type TailToHead<T extends any[]> = T extends [...infer C, infer B] ? [B, ...C]: any
type x = TailToHead<['小铜钱', 30 , '北京']> // => ['北京', '小铜钱', 30]


// 将元组转化成联合类型
type ElementOf<T> = T extends Array<infer R> ? R : any // Array<infer R>  (string|number|boolean)
type TupleToUnion = ElementOf<[string, number, boolean]> // type TupleToUnion = string | number | boolean


// Promise

let p1: Promise<number> = new Promise((resolve, reject) => {
	resolve(123)
})

p1.then(data=> { // data: number 推导出来的
	return 'abc'
}).then(data => {
	
})


type PromiseV<T> = T extends Promise<infer V> ? V : any
type PromiseReturnValue = PromiseV<Promise<number>>


// 递归推导
type PromiseV2<T> = T extends Promise<infer V> ? PromiseV2<V> : T
type PromiseReturnValue2 = PromiseV2<Promise<Promise<number>>>


// infer 就是推导条件中的某个部分的类型


















export {}



















