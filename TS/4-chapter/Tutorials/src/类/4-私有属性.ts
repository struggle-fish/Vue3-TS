// private 私有属性
// 当成员被标记成 private时，它就不能在声明它的类的外部访问。比如

class Animal2 {
	private name: string
	constructor(theName: string) {
		this.name = theName
	}
}

// let cat = new Animal2('Cat').name // name 是私有属性

// TODO:
//  TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，
//  并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

// TODO:
//  private 和 protected
//  当我们比较带有 private或 protected成员的类型的时候，情况就不同了。
//  如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员，
//  并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。

class Animal {
	private name: string
	constructor(theName: string) {
		this.name = theName
	}
}

class Rhino extends Animal {
	constructor() {
		super('Rhino');
	}
}

class Employee {
	// private name: string // 这里写一个相同的name 是可以兼容的
	private name1: string //
	
	constructor(theName: string) {
		this.name1 = theName
	}
}

let animal = new Animal('cat')
let rhino = new Rhino()
let employee = new Employee('bob')

animal = rhino
// animal = employee // employee 不存在name的时候才会报错
console.log(animal, 'animal')



// TODO:
// 子类是不能继承父类的私有属性的
// 除了自身类，其他类包括子类都是不能访问父类的私有属性的。

class Wolf extends Animal {
	constructor(name: string, age: number) {
		super(name);
	}
	
	// Error: 私有属性只能在当前类中获取，子类也不能获取
	public pubName() {
		// return this.name; // private 成员不可访问
	}
}


export {}
