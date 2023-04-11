// 植物
class Plant {
	constructor(name) {
		this.name = name
	}
	grow() {
		console.log('植物在生长')
	}
}



// 苹果
class Apple extends Plant {
	constructor(name, flavour) {
		super(name);
		this.flavour = flavour
	}
}

// 橘子
class Orange extends Plant {
	constructor(name, flavour) {
		super(name);
		this.flavour = flavour
	}
}

// 想要一个苹果
new Apple('直接new 出来一个苹果')

// 直接new 有什么缺点？
// 1、耦合
// 2、依赖具体实现 => 比如 客户端已经在使用 Apple 了，此时想把 Apple 改成 Apple1 就不行了，


// 简单工厂模式
// 不需要关心，苹果，橘子啊是怎么来的
// 只要告诉我你要什么就行了 => 根据传参 获取不同实例
class Factory {
	static create(type) {
		switch (type) {
			case 'apple':
				return new Apple()
			case 'orange':
				// 这里返回的，可以随便改，不影响外界的输出
				// 隐藏实现
				return new Orange()
			default:
				throw new Error('你要的不存在啊')
		}
	}
}
// 根据传参 获取不同实例
Factory.create('apple')
Factory.create('orange')

// 1、开闭原则（对修改关闭，对扩展开放）
// 简单工厂 缺点 不符合 开闭原则
// 比如现在需要西瓜，除了要创建一个 西瓜类，还要在 Factory 里追击 西瓜的 case















