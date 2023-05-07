
/*

发布订阅模式

		订阅者把自己想订阅的事件注册到调度中心
		当该事件出发时，发布者发布该事件到调度中心，由调度中心统一调度订阅者注册到调度中心的处理



区别：
	订阅者把自己想订阅的事件注册到调度中心
	当该事件触发时候，发布者发布该事件到调度中心，由调度中心统一调度订阅者注册到调度中心的处理代码
	虽然两种模式都存在订阅者和发布者（观察者-> 订阅者，被观察者 -> 发布者）
	但是观察者模式是右被观察者调度的，而发布/订阅模式是统一由调度中心调的
	所以观察者模式的订阅者与发布者之间是存在依赖的，而发布/订阅模式则不存在



*/

// 中介
class Agent {
	constructor() {
		this._events = {}

	}
	// 订阅 on addEventListener
	subscribe(type, listener) {
		let listeners = this._events[type]
		if (listeners) {
			listeners.push(listener)
		} else {
			this._events[type] = [listener]
		}
	}

	// 发布 emit
	publish(type) {
		let listeners = this._events[type]

		let args = Array.prototype.slice.call(arguments, 1)
		if (listeners) {
			listeners.forEach(listener => listener(...args))
		}
	}
}


// 房东
class LandLord {
	constructor(agent) {
		this.agent = agent
	}
	lend(type, area, money) {
		this.agent.publish(type, area, money)
	}
}

// 房客
class Tenant {
	constructor(name, agent) {
		this.name = name
		this.agent = agent
	}
	rent(type) {
		this.agent.subscribe(type, (area, money) => {
			console.log(`${this.name}看到中介的${type}新房源了，${area} 平，房租${money} 元`)
		})
	}
}

let agent = new Agent()

let t1 = new Tenant('张三', agent)
let t2 = new Tenant('李四', agent)

t1.rent('精装')
t2.rent('公寓')

let landLord1 = new LandLord(agent)
landLord1.lend('精装', 60, 4000)
landLord1.lend('公寓', 30, 1000)










