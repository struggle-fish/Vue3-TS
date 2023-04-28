// 外观模式
/*

外观模式  就是把一个负责的流程封装成一个接口供给外部用户更简单的使用

3个角色：
		门面角色：外观模式的核心，它被客户角色调用，它熟悉子系统的功能，内部根据客户角色的需求预定功能
		子系统角色：实现了子系统的功能，他对客户角色和门面是未知的
		客户角色：通过调用门面来完成要实现的功能



应用场景：
		为复杂的模块或子系统提供外界访问的模块
		子系统相互独立

*/




// 一个例子
class Sum {
	sum(a, b) {
		return a + b
	}
}

class Minus {
	minus(a, b) {
		return a - b
	}
}

class Multiply {
	multiply(a, b) {
		return a * b
	}
}

class Divide {
	divide(a, b) {
		return a / b
	}
}


class Calculator {
	constructor() {
		this.sumInstance = new Sum()
		this.minusInstance = new Minus()
		this.multiplyInstance = new Multiply()
		this.divideInstance = new Divide()
	}
	sum(a, b) {
		return this.sumInstance.sum(a, b)
	}

	minus(a, b) {
		return this.minusInstance.minus(a, b)
	}

	multiply(a, b) {
		return this.multiplyInstance.multiply(a, b)
	}


	divide(a, b) {
		return this.divideInstance.divide(a, b)
	}
}

let calculator = new Calculator()

console.log(calculator.sum(1, 2))


// 例子2
class CPU {
	start() {
		console.log('启动CPU')
	}
}

class Memory {
	start() {
		console.log('启动Memory')
	}
}

class HardDisk {
	start() {
		console.log('启动HardDisk')
	}
}

class Computer {
	start() {
		this.cpu = new CPU()
		this.memory = new Memory()
		this.harddisk = new HardDisk()
	}
	start() {
		this.cpu.start()
		this.memory.start()
		this.harddisk.start()
	}

}

let computer = new Computer()
computer.start()

