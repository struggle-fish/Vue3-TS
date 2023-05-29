// 学习 TS 就是学习 TS中的类型

/*
	自定义类型

	Exclude Extract 集合操作
	Pick Omit 对象结构操作
	Partial Required Readonly 修饰作用

	ReturnType Paramaters InstanceType  ... (基于infer)


	

*/

// =====================================================================================================

// Pick Omit 对象结构操作

// 部分属性变成可选的的 怎么弄
interface Person<T = any> {
	name: string
	age: number
	company: T
	address: string
}

type Compute<T extends object> = {
	[K in keyof T]: T[K]
}

// 先将 name 跳出来 变成可选的  & 除了 name 属性
//  
type PartialPropsOptional<T, K extends keyof T> = Partial<Pick<T,K>> & Omit<T, K>

type P1 = Compute<PartialPropsOptional<Person, 'name'>>
// type P1 = {
// 	name?: string | undefined;
// 	age: number;
// 	company: any;
// }



// =====================================================================================================
// 以前是根据K来选属性，可不可以 根据值的类型 来选择 key
type isEqual<T, U, Success, Fail> = [T] extends [U] ? [U] extends [T] ? Success : Fail : Fail
// { name: 'name', age: never, company: never }
type ExtractKeysByValueType<T, U> = {
	[K in keyof T]: isEqual<T[K], U, K, never>
}[keyof T] // 找到需要的属性在通过 属性选出来

type PickKeysByValue<T, U> = Pick<T, ExtractKeysByValueType<T, U>>
type P2 = PickKeysByValue<Person, string>


// type P2 = {
// 	name: "name";
// 	age: never;
// 	company: "company";
// 	address: "address";
// }

// type P2 = "name" | "company" | "address"

// type P2 = {
// 	name: string;
// 	company: any;
// 	address: string;
// }
// =====================================================================================================
// 如果是 Omit 怎么写
type OmitKeysByValueType<T, U> = {
	[K in keyof T]: isEqual<T[K], U, never, K>
}[keyof T]
type OmitKeysByValue<T, U> = Pick<T, OmitKeysByValueType<T, U>>
type P3 = OmitKeysByValue<Person, string> // 留下不想要的


// =====================================================================================================

type ExtractKeysByValueType2<T, U, O = false> = {
	[K in keyof T]: isEqual<T[K], U, isEqual<O, true, never, K>, isEqual<O, true, K, never>>
}[keyof T] // 找到需要的属性在通过 属性选出来
type PickKeysByValue2<T, U> = Pick<T, ExtractKeysByValueType2<T, U>>
type PickKeysByValue3<T, U> = Pick<T, ExtractKeysByValueType2<T, U, true>>

type P4 = PickKeysByValue2<Person, string> 
type P5 = PickKeysByValue3<Person, string> 



// =====================================================================================================
// 双重映射
type PickKeysByValue41<T extends object, U> = {
	[K in keyof T as `re_${K & string}`]: T[K] // 变量循环一遍，改一个名字  re_开头
}

type P6 = PickKeysByValue41<Person, string>

// 把映射换成一个条件  as 表示 重映射
type PickKeysByValue4<T extends object, U> = {
	[K in keyof T as T[K] extends U ? K : never]: T[K]
}

type P7 = PickKeysByValue4<Person, string>



type OmitKeysByValue5<T extends object, U> = {
	[K in keyof T as T[K] extends U ? never : K]: T[K]
}

type P8 = OmitKeysByValue5<Person, string>



// =====================================================================================================

type A = {
	name: string
	age: number
	address: string
}
type B = {
	name: string
	male: boolean
	address: number
}
type C = {
	name: string
	address: string
}
// Pick（挑选） Omit Exclude Extract(抽离)

// 求对象的交集
// { name: string, address: number }
type ObjectInter<T extends object, U extends object> = Pick<U, Extract<keyof T, keyof U>>

type x1 = ObjectInter<A, B>
// type x1 = {
// 	name: string;
// 	address: number;
// }

// 求差集

// B - A
// Omit + Extract == Pick + Exclude
type ObjectDiff<T extends object, U extends object> = Omit<U, Extract<keyof T, keyof U>>
type X2 = ObjectDiff<A, B>

// type X2 = {
// 	male: boolean;
// }


// 补集 双方得是父子关系
type ObjectComp<T extends object, U extends T> = Omit<U, Extract<keyof T, keyof U>>

type X3 = ObjectComp<C, A> // C 的补集就是 

// type X3 = {
// 	age: number;
// }



// =====================================================================================================
// 用 B 重写 A
type OverWrite<T extends object, U extends object> = ObjectInter<A, B> & ObjectDiff<B, A>
type X4 =  Compute<OverWrite<A, B>>


// =====================================================================================================
// 类型互斥问题
interface Man1 {
	fortune: string
}
interface Man2 {
	funny: string
}
interface Man3 {
	foreign: string
}

type ManType = Man1 | Man2 | Man3

let man: ManType = {
	fortune: '有钱',
	funny: '风趣',
	foreign: ''
}

// 互斥
// 将对方的属性标识成never
type Discard<T , U> = {
	[K in Exclude<keyof U, keyof T>]? : never
}

type OrType<T, U> = (Discard<T, U> & T) | (Discard<U, T> & T)
type ManType2 = OrType<Man1, Man2>

let man2: ManType2 = {
	fortune: '有钱',
	// funny: '' // 不能在赋值了
}
type ManType3 = OrType<Man2, Man1>

let man3: ManType3 = {
	// fortune: '有钱',
	funny: '' // 不能在赋值了
}


type ManType4 = OrType<Man1, OrType<Man2, Man3>>

let man4: ManType4 = {
	fortune: '有钱',
	// foreign: '',
	// funny: '' // 不能在赋值了
}
// =====================================================================================================



































export {}



















