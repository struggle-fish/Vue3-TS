
class Window {
	constructor(name) {
		this.name = name
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new Window()
		}
		return this.instance
	}
}

let w1 = Window.getInstance()
let w2 = Window.getInstance()
console.log(w1 == w2)





// ===================================================
// ES5 写法

function Window(name) {
	this.name = name
}

Window.prototype.getName = function () {
	return this.name
}

Window.getInstance = (function () {
	let instance // 一直保持存在
	return function (name) {
		if (!instance) {
			instance = new Window()
		}
		return instance
	}
})()

/*

	以上写法的问题：透明单例
		1、客户端 （使用这个类的）必须知道这个是一个单例的类，必须主动调用 getInstance
		2、并不能真正阻止客户端直接 new 调用

* */

// ===================================================

/*

	以下写法，违反了 单一原则

*/
let Window2 = (function () {
	let window
	let Window2 = function (name) {
		if (window) {
			return window
		} else {
			this.name = name
			return (window = this)
		}
	}
	return Window2
})()


/*
	new 关键字
	1、创建一个 this = 空对象

*/
let w2 = new Window2()
let w22= new Window2()
console.log(w2 == w22)


// ===================================================
// 把类的创建过程和单例逻辑分开

function Window3(name) {
	this.name = name
}
Window3.prototype.getName = function () {
	console.log(this.name)
}

let CreateSingle = (function () {
	let instance
	return function (name) {
		if (!instance) {
			// 这里写死了 Window，不够灵活
			instance = new Window(name)
		}
		return instance
	}
})()

let w3 = new CreateSingle('你好')
let w33 = new CreateSingle('你好2')
console.log(w3 === w33)



// ===================================================

let CreateSingle = (function (Constructor) {
	let instance
	return function () {
		if (!instance) {
			Constructor.apply(this, arguments)
			Object.setPrototypeOf(this, Constructor.prototype) // this.__proto__ = Constructor.prototype
			instance = this
		}
		return instance
	}
})()

let createWindow = CreateSingle(Window)
let w4 = new createWindow('你好啊')
let w44 = new createWindow('你好啊2')
console.log(w4 == w44)





// ===================================================
// 优雅赶紧一下
let CreateSingle = (function (Constructor) {
	let instance
	let SingleConstructor = function () {
		if (!instance) {
			Constructor.apply(this, arguments)
			instance = this
		}
		return instance
	}

	// 非常典型的原型继承
	SingleConstructor.prototype = Object.create(Constructor.prototype)
	return SingleConstructor
})()



// ===================================================
// 命名空间的使用
/*
	1、变量名冲突
	2、复杂层次对象的可读性要求

*/

// 形式1
// jquery 并没有把变量名声明在 window 上，而是声明在了 $ 上
let $ = {

}

$.define = function (namespace, fn) {
	let namespaces = namespace.split('.')
	let fnName = namespaces.pop()

	let current = $
	for(let i = 0; i < namespaces.length; i++) {
		let namespace = namespaces[i]
		if (!current[namespace]) {
			current[namespace] = {}
		}
		current = current[namespace]
	}
	current[fnName] = fn
}
$.define('dom.class.addClass', function () {
	console.log('dom.class.addClass')
})

$.define('dom.attr', function () {
	console.log('dom.attr')
})
$.define('dom.trim', function () {
	console.log('dom.trim')
})

$.dom.class.addClass('title')
$.dom.attr('src')




// ===================================================
// 应用案例
// 1、模态窗口

// 2、redux 整个应用只有一个仓库，整个仓库只要式状态 state

// 3、缓存

function createStore(reducer) {
	let state
	let listeners = []
	function subscribe(listener) {
		listeners.push(listener)
	}
	function getState() {
		return state
	}
	function dispatch(action) {
		state = reducer(state, action)
	}

	return {
		getState,
		dispatch,
		subscribe
	}
}


let reducer = function () {}

let store = createStore(reducer)



















































































