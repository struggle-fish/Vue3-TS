// 学习 TS 就是学习 TS中的类型

/*

		TS 中的类和 ES6 中的类是一样的，在原来的基础上加了类型

		类的组成：
			构造函数
			属性（实例属性、原型属性）
			方法（实例方法、原型方法、访问器）
			静态的属性和方法

			
	类的修饰符
		public (公开的，我自己，我的儿子，外界都可以访问)
		protected 受保护的，我自己，我儿子可以访问
		private 私有的 只能我自己
		readonly 仅仅只读




*/


// class Circle { // 类的本质也是函数，所以 默认值，可选参数，剩余运算符这些都可以用
// 	// 所有实例上的属性都需要先声明在使用
// 	x: number
// 	y: number
// 	// x!: number
// 	// y!: number
// 	constructor(x: number, y: number = 0, ...args: number[]) {
// 		// 默认赋值，如果不赋值，声明哪里会提示报错
// 		// 不想赋值，那就使用非空断言!
// 		this.x = x
// 		this.y = y
// 	}

// }

// let circle = new Circle(100, 100)
// console.log(circle.x)

// =======================================================================
// 类的修饰符
// public (公开的，我自己，我的儿子，外界都可以访问)
// protected 受保护的，我自己，我儿子可以访问
// private 私有的 只能我自己

// class Animal {
// 	public name!: string
// 	age!: number // 不写修饰符的话 默认就是 public
// 	constructor(name: string, age: number) {
// 		this.name = name
// 		this.age = age
// 	}
// }

// class Cat extends Animal {

// }
// let cat = new Cat('汤姆', 10)
// console.log(cat.name)
// console.log(cat.age)
// =======================================================================
// public 在构造函数里的使用
// class Animal {
// 	// 参数上添加 public 就等价于  声明了变量同时 this.name = name 赋值
// 	// 参数上添加 public protected private 这些属性会默认添加到实例
// 	constructor(public name: string, public age: number) {
// 	}
// 	getName() {
// 		console.log(this.name)
// 	}
// }
//
// class Cat extends Animal {
// 	constructor(name: string, age: number) {
// 		super(name, age)
// 		console.log(this.name)
// 	}
// }
// let cat = new Cat('汤姆', 10)
// console.log(cat.name)
// console.log(cat.age)


// =======================================================================
// class Animal {
// 	constructor(protected name: string, public age: number) {
// 	}
// 	getName() {
// 		console.log(this.name)
// 	}
// }
//
// class Cat extends Animal {
// 	address = '地址'
// 	constructor(name: string, age: number, address: string = '中华') {
// 		super(name, age)
// 		this.address = address
// 		this.name // 我儿子可以访问
// 	}
// }
// let cat = new Cat('汤姆', 10)
// console.log(cat.name) // 属性“name”为私有属性，只能在类“Animal”中访问。ts(2341)
// console.log(cat.age)
// =======================================================================


// class Animal {
// 	constructor(private name: string, public age: number) {
// 	}
// 	getName() {
// 		console.log(this.name)
// 	}
// }
//
// class Cat extends Animal {
// 	address = '地址'
// 	constructor(name: string, age: number, address: string = '中华') {
// 		super(name, age)
// 		this.address = address
// 		this.name // 属性“name”为私有属性，只能在类“Animal”中访问。ts(2341)
// 	}
// }
// let cat = new Cat('汤姆', 10)
// console.log(cat.name) // 属性“name”为私有属性，只能在类“Animal”中访问。ts(2341)
// console.log(cat.age)


// =======================================================================
// class Animal {
// 	constructor(public readonly name: string, public age: number) {
// 		// readonly 在构造函数了可以改
// 		this.name = '我改' // 在构造函数中是初始化阶段，readonly 的值是可以修改的
// 	}

// 	// readonly 一旦初始化完了，就不能在修改了
// 	changeName(name: string) {
// 		this.name = name // 无法为“name”赋值，因为它是只读属性。ts(2540)
// 	}
// }

// class Cat extends Animal {
// 	address = '地址'
// 	constructor(name: string, age: number, address: string = '中华') {
// 		super(name, age)
// 		this.address = address
// 		this.name = '哈哈哈' // 无法为“name”赋值，因为它是只读属性。ts(2540)
// 	}
// }
// let cat = new Cat('汤姆', 10)
// console.log(cat.name)
// console.log(cat.age)

// =======================================================================

// 属性 分为 静态属性 实例属性 原型属性

// 实例和原型的区别：原型是共享的 实例是独属于每个人的

// class Animal {
// 	name: object // 实例上的
// 	constructor() {
// 		this.name = {}
// 	}

// }
// let animal1 = new Animal()
// let animal2 = new Animal()
// console.log(animal1.name === animal2.name) // false

// =======================================================================

// 原型上的
// class Animal {
// 	_name: string = '汤姆猫'
// 	constructor() {
// 		// this.name = {}
// 	}
// 	// 类中如何声明原型属性？
// 	get name() { // 类的访问器，访问的是原型上的属性
// 		return this._name
// 	}
// 	set name(newVal) {
// 		this._name = newVal
// 	}
// }
// let animal1 = new Animal()
// let animal2 = new Animal()
// console.log(animal1.name === animal2.name) // true



// =======================================================================

// 静态属性，通过类来访问

// class Animal {
// 	static age: string = '汤姆猫'
// }
// console.log(Animal.age)

// =======================================================================
// 原型方法 实例方法

// class Animal {

// 	// 静态方法
// 	static getType() {
// 		return '爬行类'
// 	}

// 	run: () => void // 所有实例上的都要先声明，不管是方法还是属性
// 	constructor() {
// 		// 实例上的方法
// 		this.run = () => {}
// 	}

// 	// 原型方法
// 	say() {
// 		return '1234'
// 	}
// 	eat():void {} // void 不关心返回值，子类可以随便返回
// }

// // 子类重写父类的方法，要求必须和父类的方法类型一致
// class Mouse extends Animal{
// 	// 子类重写了父类的方法
// 	say(): string{
// 		return 'abc'
// 	}
// 	eat(): number {
// 		return 123
// 	}
// }

// =======================================================================
// super 关键字  指代的可能是 父类  或者是父类的原型
// class Animal {
// 	static getType() {
// 		return '哺乳类'
// 	}

// 	say () {
// 		console.log('父类原型-say')
// 	}
// }

// class Mouse extends Animal {
// 	static getType() {
// 		super.getType() // 调用父类的方法 此时super 指代的是父类
// 		return '老鼠'
// 	}
// 	say () {
// 		super.say()
// 		console.log('子类原型-say')
// 	}
// }

// let mouse = new Mouse()
// console.log(mouse.say())

// 正常类中，原型属性（get set 属性访问器来实现）
// 原型方法 （Animal.prototype）
// 实例属性  实例方法 都是声明在实例上的
// 静态属性 静态方法 都是声明在 类上的
// super 在构造函数中，静态方法中 指向的是 父类
// super 在原型方法中，指向的是父类原型

// 实例属性要提前声明，修饰符 private protected public readonly static





// 单例模式
class Singleton {
	static instance = new Singleton()
	private constructor() {}
	static getInstance() {
		return this.instance
	}
}

let instance1 = Singleton.getInstance()
let instance2 = Singleton.getInstance()
console.log(instance1 == instance2)

// =======================================================================


// 抽象类 不能被 new
// abstract class Person {
// 	// 这样是描述实例上的方法的
// 	abstract eat: () => void
// 	drink() {} // 抽象类中可以有非抽象方法
// }

// class Teacher extends Person {
// 	eat: () => void
// 	constructor() {
// 		super()
// 		this.eat = function() {}
// 	}
// }
// =======================================================================


abstract class Person {
	// 对比这个 	abstract eat: () => void
	// 这么写原则上是描述的原型上的方法，但是写实例上也不报错
	abstract eat(): void // 需要子类来实现一个 eat 方法 
	drink() {} // 抽象类中可以有非抽象方法
}

class Teacher extends Person {
	// eat: () => void
	// constructor() {
	// 	super()
	// 	this.eat = function() {}
	// }

	// 实现 abstract eat(): void
	eat(): void {
		
	}
}















































































































export {}



















