/*

 代理模式：
  由于一个对象不能直接引用另外一个对象，所以需要通过代理对象在这两个对象之间起到中介作用

  可以在使用者和目标对象之间加一个代理对象，通过代理可以实现控制






*/


// class Google {
// 	get(url) {
// 		return 'google'
// 	}
// }
//
//
// class Proxy {
// 	constructor() {
// 		this.google = new Google()
// 	}
// 	get(url) {
// 		return this.google.get(url)
// 	}
// }
//
// let proxy = new Proxy()
// let result = proxy.get('http://www.google.com')
// console.log(result)

// ===================================================================

// 代理缓存
// n = 4 1! + 2! + 3! + 4!
// function multi(n) {
// 	if (n <=1) {
// 		return 1
// 	} else {
// 		return n * multi(n - 1)
// 	}
// }

// let sum = function (n) {
// 	let result = 0
// 	for (let i = 1; i <= n; i++) {
// 		result += multi(i)
// 	}
// 	return result
// }


let sum = (function () {
	let cache = {} //  缓存每次的计算结果
	function multi(n) {
		if (n <=1) {
			return 1
		} else {
			return n * (cache[n - 1] ||  multi(n - 1))
		}
	}
	return function (n) {
		let result = 0
		for (let i = 1; i <= n; i++) {
			let ret = multi(i)
			cache[i] = ret // 从 1 开始 ，每个阶乘都记录到缓存中
			result += ret
		}
		return result
	}
})()

console.log(sum(3))


// ===================================================================


// $.proxy 函数
// 接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境
// jQuery.proxy(function, context) function 为执行的函数， content 为函数的上下文 this 值会被设置成这个object对象


// function proxy(fn, context){
// 	return function () {
// 		fn.apply(context, arguments)
// 	}
// }


// ES6 Proxy

/*

Proxy 用于修改某些操作的默认行为
Proxy 可以理解成，在目标对象之前假设一层拦截，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
Proxy 这个词的原意是代理，用在这里表示由它来代理某些操作，可以译为代理器


代理模式 VS 适配器模式 适配器模式提供不同接口，代理模式提供一模一样的接口
代理模式 VS 装饰器模式 装饰器模式原来的功能不变还可以使用，代理模式改变原来的功能
*/


let wangy = {
	name: '小铜钱',
	age: 18,
	height: 170
}

let wangM = new Proxy(wangy, {
	// 获取一个值
	get(target, key) {
		if (key == 'age') {
			return target.age - 2
		} else if (key == 'height') {
			return target.height + 3
		} else {
			return target[key]
		}
	},
	// 设置值
	set(target, key ,val) {
		if (key == 'boyfriend') {
			let boyfriend = val
			if (boyfriend.age > 40) {
				throw  Error('太老了')
			} else if (boyfriend.salary < 20000) {
				throw Error('太穷了')
			} else {
				target[key] = val
			}
		}
	}
})


console.log(wangM.height)
wangM.boyfriend = {
	age: 12,
	salary: 30000
}


console.log(wangM)


// ===================================================================
/*

	事件委托

		事件捕获指的是从document到触发事件的那个节点，即自上而下的去触发事件
		事件冒泡是自下而上的去触发事件
		绑定事件方法的第三个参数，就是控制事件触发顺序是否为事件捕获。true 为事件捕获，false 为事件冒泡，默认fasle。
		语法：element.addEventListener(event, function, useCapture)




*/



let urllist = document.getElementById('urlist')
// 事件委托（事件代理），想让li 触发点击事件，但是缺给 li 的爸爸绑定点击事件了，委托给了它爸爸
urllist.addEventListener('click', function (event){
	alert(event.target.innerHTML)
})



// ===================================================================
// 页面选中防抖代理





















































