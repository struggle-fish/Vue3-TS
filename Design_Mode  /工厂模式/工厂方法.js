// 工厂方法 又称作 多态工厂模式

// 工厂方法模式中，核心的工厂类不在负责所有的产品创建，而是将具体的创建工作交给子类去做

// 简单工厂的问题： 不符合开闭原则


// TODO: 目标，追加新水果，不需要改原有代码

// 场景：服务员A是卖粥的，客人想吃麻辣烫
// 怎么才能做到，给客人麻辣烫，但是不需要改造服务员A呢
// 可以去张亮麻辣烫家，找他们的服务员B要麻辣烫
// 服务员A只管卖粥，服务员B只管卖麻辣烫
// 这样服务员只管自己的就行，也不需要学习其他的（服务员A不需要学习怎么卖麻辣烫）


class Plant {
	constructor(name) {
		this.name = name
	}
}

class Apple extends Plant {
	constructor(name, flavour) {
		super(name);
		this.flavour = flavour
	}
}

class Orange extends Plant {
	constructor(name, flavour) {
		super(name);
		this.flavour = flavour
	}
}


class WaterMelon extends Plant {
	constructor(name, flavour) {
		super(name);
		this.flavour = flavour
	}
}

class Factory {
	static create() {
	}
}

class AppleFactory extends Factory {
	static create() {
		return new Apple()
	}
}
class OrangeFactory extends Factory {
	static create() {
		return new Orange()
	}
}

class WaterMelonFactory extends Factory {
	static create() {
		return new WaterMelon()
	}
}


// 调用不同的工厂创建不同的产品
let apple = AppleFactory.create()
let orange = OrangeFactory.create()
// 想要西瓜，那就在来个西瓜工厂，苹果工厂和橘子工厂没动啊
let watermelon = WaterMelonFactory.create()

// 缺点，工厂又写死了，跟简单工厂有啥区别


// 一般会跟着配置对象配合使用
let settings = {
	'apple': AppleFactory,
	'orange': OrangeFactory,
	'watermelon': WaterMelonFactory
}
let apple2 = settings['apple'].create()
let orange2 = settings['orange'].create()
















