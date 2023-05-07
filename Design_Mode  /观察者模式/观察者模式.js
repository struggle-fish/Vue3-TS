/*
观察者模式：
	被观察者供维护观察者的一系列方法
	观察者提供更新接口
	观察者把自己注册到被观察者里
	在观察者发生变化时候，调用观察者的更新方法

观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使他们能够自动更新

主题对象（Subject）该角色又称为被观察者，可以增加和删除观察者对象，它将有关状态存入具体观察者对象，在具体主题的内部状态改变时，给所有登记过（关联了观察关系）的观察者发出通知
观察者（Observer）角色：定义一个接收通知的接口（update）在得到主题的通知时更新自己








*/

class Star {
	constructor(name) {
		this.name = name
		this.state = ''
		this.observers = [] // 粉丝
	}
	getState() {
		return this.state
	}
	setState(state) {
		this.state = state
		this.notifyAllObservers()
	}
	// 追加一个新的观察者
	attach(observer) {
		this.observers.push(observer)
	}
	// 通知所有的观察者更新自己
	notifyAllObservers() {
		if (this.observers.length > 0) {
			this.observers.forEach(observer => observer.update())
		}
	}
}


class Fan {
	constructor(name, star) {
		this.name = name
		this.star = star

		// 把自己加到明星的粉丝团里
		this.star.attach(this)
	}

	update() {
		console.log(`我的爱豆喜欢${this.star.getState()}, 我也喜欢`)
	}

}

let star = new Star('刘德华')
let fan = new Fan('小铜钱', star)
star.setState('绿色')





// ========================================================

// promise 原理  类似监听模式的实现
class Promise {
	constructor(fn) {
		this.successes = []
		let resolve = (data) => {
			console.log(data, '数据-then')
				this.successes.forEach(item => item(data))
		}

		fn(resolve)
	}

	then(success) {
		console.log('执行then')
		this.successes.push(success)
	}
}




let p = new Promise(function (resolve) {
	setTimeout(function () {
		resolve('ok')
	}, 2000)
})
p.then(data => console.log(data, '00000'))


// ========================================================
// jq callbacks
const jQuery = {

	Callbacks() {
		let callbacks = []
		function add(callback) {
			callbacks.push(callback)
		}
		function remove(callback) {
			callbacks = callbacks.filter(item => item !== callback)
		}

		function fire() {
			callbacks.forEach(item => item())
		}


		return {
			add,
			remove,
			fire
		}
	}


}

let callbacks = jQuery.Callbacks()
console.log(callbacks)
function a1() {
	console.log('a1')
}
function a2() {
	console.log('a2')
}
function a3() {
	console.log('a3')
}

callbacks.add(a1)
callbacks.add(a2)
callbacks.add(a3)
callbacks.remove(a2)
callbacks.fire()


// ========================================================
// events

// let EventEmitter = require('events')
// let eve = new EventEmitter()
// eve.on('click', function (name) {
// 	console.log('11', name)
// })
// eve.emit('click', '啊哈哈')

// let utils = require('util')
// function Bell() {
//
// }
//
// utils.inherits(Bell, EventEmitter)
//
// let bell = new Bell()
// bell.on('响', function () {
// 	console.log('去上课')
// })
//
// bell.emit('响')

class EventEmitter {
	_events = {}

	constructor() {
	}

	on(type, listener) {
		let listeners = this._events[type]
		if (listeners) {
			listeners.push(listener)
		} else {
			this._events[type] = [listener]
		}
	}

	emit(type, ...args) {
		let listeners = this._events[type] || []
		listeners.forEach(listener => listener(...args))
	}
}




// ========================================================
// vue watch
/*

	在 Vue 中， 每个组件实例都有相应的 watcher 实例对象
	它会在组件渲染的过程中把属性记录为依赖，之后当依赖的 setter 被调用时
	会通知 watcher 重新计算，从而致使它关联的组件得以更新



*/

let name = document.getElementById('name')
let age = document.getElementById('age')
class Dep {
	subs = []
	addSub(sub) {
		this.subs.push(sub)
	}
	notify() {
		this.subs.forEach(sub => sub())
	}
}

function observer(target) {
	Object.keys(target).forEach(key => {
		let val = target[key]

		let dep = new Dep()
		if (key == 'name') {
			name.innerHTML = val
			dep.addSub(() => {
				name.innerHTML = val
			})
		} else if (key == 'age') {
			age.innerHTML = val
			dep.addSub(() => {
				age.innerHTML = val
			})
		}


		Object.defineProperty(target, key, {
			get: function () {
				return val
			},
			set: function (newVal) {
				val = newVal
				dep.notify()
			}
		})
	})
}

let obj = {
	name: '小铜钱',
	age: 18
}
observer(obj)
setTimeout(() => {
	obj.name = '钢镚儿'
}, 2000)

setTimeout(() => {
	obj.age = 20
}, 3000)













































