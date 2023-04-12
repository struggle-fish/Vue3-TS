// 抽象工厂模式是 指当有多个抽象角色是，使用的一种工厂模式
// 抽象工厂模式可以 向客户端提供一个接口，使客户端在不必指定产品的具体情况下，创建多个产品族中的产品对象

// 抽象工厂一般是在产品很多的情况下用
// 实际开发中，一个工厂可能要负责多套产品的创建，比如按钮 在window、mac上长的是不一样的



class Factory {
	createButton() {}

	createIcon() {}
}


class Icon {}

class AppleIcon {
	render() {
		console.log('绘制苹果Icon')
	}
}
class AndroidIcon {
	render() {
		console.log('绘制安卓Icon')
	}
}




class Button {}

class AppleButton {
	render() {
		console.log('绘制苹果Button')
	}
}
class AndroidButton {
	render() {
		console.log('绘制安卓Button')
	}
}


class AppleFactory extends  Factory {
	createButton() {
		return new AppleButton()
	}

	createIcon() {
		return new AppleIcon()
	}
}


class AndroidFactory extends  Factory {
	createButton() {
		return new AndroidButton()
	}

	createIcon() {
		return new AndroidIcon()
	}
}


// ============苹果手机上=================
let appleFactory = new AppleFactory()
appleFactory.createIcon().render()
appleFactory.createButton().render()
// 生产多个产品，而不是单一的一个

// ============安卓手机上=================
let androidFactory = new AndroidFactory()
androidFactory.createIcon().render()
androidFactory.createButton().render()




/*
	对比

	简单工厂：一般就是一个函数返回一个类的实例

	工厂方法：多了一个工厂类，要想创建产品，需要先创建此工厂的实例，在通过此工厂来创建产品
					一个工厂只能成产一种产品，实力有点儿弱（比如卖花生，只卖一种花生不太行，花生可以是多种，比如炒花生，煮花生，花生碎）

	抽象工厂：在抽象工厂中，一个工厂可以创建多种产品（产品得是同一个类型的，花生不管是煎炒烹炸，都是花生系列）












*/










