/*

装饰器 是将一个对象嵌套到另一个对象中，实际上相当于这个对象被另一个对象包装起来，形成一条包装链

请求随着这条链条依次传递给所有的对象，每个对象有处理这个请求的机会

AOP
在软件业，AOP为Aspect Oriented Programming 的缩写，面向切面编程

可以通过预编译方式和运行期动态代理实现在不修改源代码的情况下给程序动态统一添加功能的一种技术


AOP 就是在函数执行之前或之后添加一些额外的逻辑，而不需要修改函数原有的功能
*/

class Duck {
	constructor(name) {
		this.name = name
	}
	eat(food) {
		console.log(`吃${food}`)
	}
}


class TangDuck {
	constructor(name) {
		this.duck = new Duck(name)
	}


	eat(food) {
		// duck eat的功能没有改变，
		this.duck.eat(food)
		// 这里又做了增强
		console.log('谢谢')
	}
}



let t = new TangDuck()
t.eat('苹果')



// ==============================================
// 装饰器模式有时候会优于继承
/*
  美式咖啡  加糖  加奶


*/

// 自由组合：1、咖啡  2、咖啡 + 奶  3、咖啡+ 糖 + 奶
class Coffee {
	make(water) {
		return `${water} + 咖啡`
	}
	cost() {
		return 10
	}
}

class MilkCoffee {
	constructor(parent) {
		this.parent = parent
	}
	make(water) {
		return `${this.parent.make(water)} + 奶`
	}
}

class SugarCoffee {
	constructor(parent) {
		this.parent = parent
	}
	make(water) {
		return `${this.parent.make(water)} + 糖`
	}
}
// 想要一个加奶的咖啡
let coffee = new Coffee()
let milkCoffee = new MilkCoffee(coffee)
let res = milkCoffee.make('水')
console.log(res)



// ==============================================

Function.prototype.before = function (beforeFn) {
	let _this = this // buy
	return function () {
		beforeFn.apply(this, arguments)
		_this.apply(this, arguments)
	}
}

Function.prototype.after = function (afterFn) {
	let _this = this // buy
	return function () {
		_this.apply(this, arguments)
		afterFn.apply(this, arguments)
	}
}


function buy(money, goods) {
	console.log(`花${money} 买${goods}`)
}

buy = buy.before(function () {
	console.log('向媳妇申请1块钱')
})

buy = buy.after(function () {
	console.log('向媳妇还0.2 ')
})
buy(0.8, '烟')


// ==============================================
// 应用场景：埋点

/*

埋点方式：
	服务端层面：主要是通过客户端的请求进行分析
	客户端层面：通过埋点进行相应的分析

	自动埋点：通过AOP思想对相应的方法进行统计


*/
















































































