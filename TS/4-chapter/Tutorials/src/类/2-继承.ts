// 类的继承

class Animal {
	move(distanceInMeters: number = 0) {
		console.log(`Animal moved ${distanceInMeters}m.`)
	}
}

// 类从基类中继承了属性和方法
// Dog是一个 派生类
// Dog 派生自 Animal 基类，
// 通过 extends关键字。
// 派生类通常被称作 子类，基类通常被称作 超类。
class Dog extends Animal {
	bark() {
		console.log('Woof! Woof!')
	}
}



const dog = new Dog()
dog.bark()
dog.move(12)


// >> 一个相对复杂的例子

class Animal2 {
	name: string
	constructor(theName: string) {
		this.name = theName
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Animal2 {
	constructor(name: string) {
		super(name)
	}
	// 方法重写
	move(distanceInMeters = 5) {
		console.log("Slithering...");
		// TODO: 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。
		// 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。
		super.move(distanceInMeters);
	}
}

class Horse extends Animal2 {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);











export {}






