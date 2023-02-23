// 传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件


// 但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，
// JavaScript程序员将能够使用基于类的面向对象的方式。
// 使用TypeScript，我们允许开发者现在就使用这些特性，
// 并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。


// Greeter类
class Greeter {
	// 属性
	greeting: string
	
	// 构造函数
	constructor(message: string) {
		this.greeting = message
	}
	
	// 方法
	greet() {
		// 你会注意到，我们在引用任何一个类成员的时候都用了 this。 它表示我们访问的是类的成员。
		return '你好' + this.greeting
	}
	
}


// new 类的调用， 它会调用之前定义的构造函数，创建一个 Greeter类型的新对象，并执行构造函数初始化它。
let greeter = new Greeter('世界')


export {}










