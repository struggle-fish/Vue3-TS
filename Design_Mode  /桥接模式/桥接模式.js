// 桥接模式

/*

 桥接模式：
      将抽象部分与其他的实现部分分离
      这样抽象部分与实现化解耦，使他们可以独立的变化

      应用场景是实现系统可能有多个角度分类，每一种角度都可能变化

      可以通过实现桥接口进行单方面扩展，而另一方可以继承抽象类而单方面扩展，之间的调用就从桥接口来作为突破口
      不会受到双方扩展的任何影响

*/

class A {
	constructor(bridge) {
		this.position = 'A地点'
		this.bridge = bridge
	}
	go() {
		console.log(`从${this.position}到达${this.bridge.to()}`)
	}
	from() {
		throw new Error('子类必须实现此方法')
	}
}

class A1 extends A {
	from() {
		return 'A1'
	}
}


class A2 extends A {
	from() {
		return 'A2'
	}
}

class B {
	to() {
		throw new Error('子类必须实现此方法')
	}
}

class B1 extends B {
	to() {
		return 'B1'
	}
}

class B2 extends B {
	to() {
		return 'B2'
	}
}



let b2 = new B2()
let a1 = new A1(b2)
a1.go()




















