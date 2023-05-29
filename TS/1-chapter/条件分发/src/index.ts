// 学习 TS 就是学习 TS中的类型

/*

	条件类型  extends 约束 经常和条件类型一起使用
	格式：可以看成三元表达式
	
	

	
*/

type ResStatusMessage<T> = T extends 200 | 201 | 206 ? 'success' : 'fail' // 字面量类型  具体的值，就是字面量类型

type IMessage = ResStatusMessage<200>

type IMessage2 = ResStatusMessage<300>
// 对于联合类型而言，子类型是其中的任何一个
// 交叉后的结果，就是交叉前的某个类型的子类型



// ========================================================================
// 泛型在条件类型中广泛被应用
type Conditional<T, U> = T extends U ? true : false
type R1 = Conditional<'小铜钱', string>


// ========================================================================
// 根据条件 返回 对应的类型

// 如果是字符串返回字符串，如果是数字返回数字，都不是返回 never
type FormatReturnValue<T> = T extends string ? string : T extends number ? number : never

function sum<T extends string | number>(a: T, b: T): FormatReturnValue<T> {
	// 泛型 不能直接运算， 需要any 一下
	return a + (b as any) // 运算符“+”不能应用于类型“T”和“T”。
}


let r = sum(1, 2)


// ========================================================================
// 判断接口的类型

// interface Fish {
// 	name: '鱼'
// }

// interface Water {
// 	type: '水'
// }

// interface Bird {
// 	name: '鸟'
// }

// interface Sky {
// 	type: '天空'
// }

// type SelectType<T> = T extends Fish ? Water : Sky
// type R2 = SelectType<Fish>


// type R3 = SelectType<Bird>

// type R4 = SelectType<Fish | Bird> // => type R4 = Water | Sky 为什么是这个


// ========================================================================

// extends 类型等级

// never 和 字面量的类型  子类型可以赋予给父类型
// 字面量类型肯定是基础类型的子类型
type T1 = never extends '124' ? true : false // type T1 = true
let a: number = (function():never {
	throw new Error()
})()

// 字面量类型肯定是基础类型的子类型
type T2 = 123 extends number ? true : false

// 字面量类型和普通关系类型






// 基础类型 和 包装类型
// 基础类型是包装类型的子类型
// 所有包装类型的上一层都是 Object
type T4 = string extends String ? true : false

let temp1: string = '1234'
let s: String = temp1
type T5 = String extends Object ? true : false




// 所有类型都是 any 和 unknown 的子类型
// any = unknown 顶端类型
type T6 = Object extends any ? true : false

type T7 = unknown extends 1 ? true : false // type T7 = false
type T8 = any extends 1 ? true : false // type T8 = boolean  any 可以看成 1 + 其他类型 （内置有分发的机制）直接取最终的联合类型
type T9 = null extends undefined ? true : false

type T10 = undefined extends void ? true : false

// ========================================================================

// 另一个情况  多类型比较（分发）


interface Fish {
	name: '鱼'
}

interface Water {
	type: '水'
}

interface Bird {
	name: '鸟'
}

interface Sky {
	type: '天空'
}

// T 没有被包裹就是裸类型  [T] 这个就不是裸类型
type SelectType<T> = T extends Fish ? Water : Sky

// type SelectType<T> = [T] extends [Fish] ? Water : Sky


type R11 = SelectType<Bird | Fish> // type R11 = Water | Sky => 先拿 Bird 去 比较得到 Sky 再拿Fish 去比较  得到 Water

type R12 = Bird | Fish extends Fish ? Water : Sky // type R12 = Sky

// 分发机制：大部分情况下是不好的
// 通过泛型传入的方式 来比较的时候  会出现分发
// 类型需要是联合类型
// 类型需要完全的裸露(没有被包裹，也没和别人做运算)出来


// ========================================================================
// 在开发中需要避免分发机制

// 判断谁是谁的子类型的时候就会发生异常

// 1 | 2 是 1 | 2 | 3 的子集  翻过来就是不对了  <1 | 2 | 3, 1 | 2>

type UnionAssets<T, U> = T extends U ? true : false

type T13 = UnionAssets<1 | 2, 1 | 2 | 3>  // 拿 1 去 1 | 2 | 3找发现 true  在拿 2 去 1 | 2 | 3找发现 true  true 和 true 的联合类型 是 true

type T14 = UnionAssets<1 | 2 | 3, 1 | 2> // type T14 = boolean  先拿1 去找 true 再拿 2去找 true 再拿3去找 false  true | true | false的联合类型就是 boolean


// 不分发
type UnionAssets2<T, U> = [T] extends [U] ? true : false

type T15 = UnionAssets2<1 | 2, 1 | 2 | 3> // true
type T16 = UnionAssets2<1 | 2 | 3, 1 | 2> // false

// 工具方法
type NoDistrubte<T> = T & {} // 给他穿个衣服

type UnionAssets3<T, U> = NoDistrubte<T> extends U ? true : false
type T17 = UnionAssets3<1 | 2, 1 | 2 | 3> // true
type T18 = UnionAssets3<1 | 2 | 3, 1 | 2> // false


// ========================================================================

// 两个类型是否完全相等
type IsEqual<T, U, Success, Fail> = NoDistrubte<T> extends U ? NoDistrubte<U> extends T ? Success : Fail : Fail
type T19 = IsEqual<1 | 2, 1 | 2, true, false>



// ========================================================================
// never 做比较的时候，也会有分发问题，
//   any 默认分发
//  never 默认只有通过泛型传递的时候 会返回 never

type isNever<T> = T extends never ? true : false
type T20 = isNever<never> // type T20 = never  规定死的，泛型传递 never 就是never


type isNever2<T> = NoDistrubte<T> extends never ? true : false // 不走分发就正常了
type T21 = isNever2<never> // type T21 = true b

// ========================================================================

// 父子类型关系  如何判断两个类型的父子关系  extends 用法


// ========================================================================
// 内置的条件类型
// Extract  Exclude NonNullable  集合之间的操作

// 获取两个联合类型的交集
type Extract<T, U> = T extends U ? T : never; // never的妙用，置成never 就无法访问了  string | number | never => 得到的就是 string | number
type ExtractResult = Extract<string | number, string | number | boolean>


// 两个集合的差集
type Exclude<T, U> = T extends U ? never : T;
type E1 = Exclude<string | boolean, string | number> // type E1 = boolean



// 补集 的含义就是互补的：  差集 + 子类的关系
type Complement<T, U extends T> = T extends U ? never : T
type E2 = Complement<string | number | boolean, string>


// NonNullable
let ele = document.getElementById('root')
type NonNullable<T> = T & {};

type NonNullable2<T> = T extends null | undefined ? never : T // 过滤 null undefined
type Ele = NonNullable<typeof ele>

// ========================================================================

// infer 类型推断






























export {}



















