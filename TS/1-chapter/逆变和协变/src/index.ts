// 学习 TS 就是学习 TS中的类型

/*
	逆变和协变

	逆变：以前当儿子 现在做父
	协变：以前做父 商量下，做 子


	结论就是 传父 返子





*/


class Parent {
	house() {}
}

class Child extends Parent {
	car() {}
}


class Grandson extends Child {
	sleep() {}
}

// 传递儿子，返回儿子
// function fn(callback: (instance: Child) => Child) {

// }

// 传入 Parent OK  => 逆变 就是 以前传递的是子类，现在可以传递 父类
fn((instance: Parent): Child => {
	return new Child()
})



// 逆变：传入 Grandson  NO OK
// fn((instance: Grandson): Child => {
// 	return new Child()
// })

// 协变呢 以前传递的是子类（子是孙的父），可以用孙子
fn((instance: Parent): Grandson => {
	return new Grandson()
})


// 协变呢 以前传递的是子类（子是孙的父），可以用孙子
// 此处传 父呢，就不行
// fn((instance: Parent): Parent => {
// 	return new Parent()
// })


// =====================================================================================================

// 通过父子关系来证明 兼容性
// 在赋予值的时候，可以赋予自己和子类型
// function fn(callback: (instance: Child) => Child) {
// 	// callback 这里的传值 ，可以是自己，也可以是他的孩子
// 	callback(new Child()) 
// 	// callback(new Grandson())
// 	// callback(new Parent())
// }

// TODO: 这里只能标注 父类，是因为，你如果标注子类的话，传的时候，传父类，不传子类，这里就报错了
// fn((instance: Grandson): Grandson => {
// 	// instance: Grandson 这里标注  如果传递的是 Grandson 那如果 有可能 想调用 sleep
// 	// instance.sleep 是可以的，  但是有个问题，传递的时候，可能传递的是 Child 那么就没有 sleep了
// 	return new Grandson()
// })


// TODO:  内部在调用 callback 的时候，可以传递 child 或者 Grandson （传递了 Grandson ，在使用 Grandson 中的属性肯定使用不了）
// TODO: 如果用户在回调中，使用属性的时候，要保证范围不能超过  Child 控制的范围，所以标识 Grandson 的话可能不安全，但是标识 Parent 是安全的，因为子类中的属性包含了 Parent的属性


// =====================================================================================================


function fn(callback: (instance: Child) => Child) {
	let r = callback(new Child()) 
	// r 是 Child 类型 如果用户返回了 new Grandson() ,Grandson 是属于 Child 子类型的

}
// TODO: 调用的时候，返回的是 Parent 那跟上面的 r 是对应不上的 
// fn((instance: Parent): Parent => {
// 	return new Parent() // 返回值可以传递子类
// })

// TODO: 一个值随着输入的变化儿辩护就是协变，相反的是就是逆变


type Arg<T> = (arg:T) => void
type Return<T> = (arg: any) => T
// 应该是儿子在前，父亲在后 => 子 extends 父，但是通过函数 把父亲放前了，儿子放后了 => 父 extends 子 => 逆变
type isArg = Arg<Parent> extends Arg<Child> ? true : false

// 孙 -> 子  也是 父与子的关系
type isReturn = Return<Grandson> extends Return<Child> ? true : false


// TODO: 也就是，调用的时候呢，传父  返子  传递的是，可以传比定义的时候定义的时候的要大的，返回的时候，只能返回比定义的时候的返回要小的



// =====================================================================================================
// 逆变产生的问题

interface Array<T> {
	// concat:(...args: T[]) => T[] // TODO: 这么写不行，会有逆变 强制触发逆变
	concat(...args: T[]) : T[] // TODO: 这么写 就禁用了逆变的效果，不去检测逆变问题
	[key: number]: any
}

let parentArray!: Array<Parent>
// parentArray[0].concat

let childArray!: Array<Child>

// 那么 childArray 可以赋予给 parentArray 吗 子赋值给父
// parentArray = childArray // error 了 
// 赋值的时候，会对比 concat
// (...args: Parent[]) => Parent[] 和 (...args: Child[]) => Child[] 逆变了  自我之上众生平等，自我之下阶级分明
parentArray = childArray



// let array: Array<string> = []


function fn1 (callback: (a: string | boolean) => boolean | string) {
	// callback('a')
	callback(true)
}

// 传 父  返子
fn1((a: string | boolean | number ) => {
	// return 'abc'
	return 'abc' // 返子
})



// =====================================================================================================

// 泛型的 兼容性 比较的是最终的结果比较的不是泛型传递的参数

interface II<T> {}
let a1!: II<string>
let a2!: II<number>

a1 = a2

type xxx = II<string> extends II<number> ? true : false  // true


// =====================================================================================================
// 枚举永远不兼容
const enum E1 {
	a = 1
}
const enum E2 {
	a = 1
}

let a3!: E1
let a4!: E2
// a3 = a4  不能赋值

// =====================================================================================================




























// =====================================================================================================


















export {}



















