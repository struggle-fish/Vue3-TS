console.log('抽象工厂模式')


// 抽象工厂是一种创建型设计模式， 它能创建一系列相关的对象， 而无需指定其具体类。


interface AbstractProductA {
	usefulFunctionA(): string
}


interface AbstractProductB {
	usefulFunctionB(): string
	
	anotherUsefulFunctionB(collaborator: AbstractProductA): string
}

interface AbstractFactory {
	createProductA(): AbstractProductA
	
	createProductB(): AbstractProductB
}


// 一个工厂
class ConcreteFactory1 implements AbstractFactory {
	createProductA(): AbstractProductA {
		return new ConcreteProductA1()
	}
	createProductB(): AbstractProductB {
		return new ConcreteProductB1()
	}
}


// 第二个加工厂
class ConcreteFactory2 implements AbstractFactory {
	createProductA(): AbstractProductA {
		return new ConcreteProductA2();
	}
	
	createProductB(): AbstractProductB {
		return new ConcreteProductB2();
	}
}




class ConcreteProductA1 implements AbstractProductA {
	usefulFunctionA(): string {
		return 'The result of the product A1.';
	}
}

class ConcreteProductA2 implements AbstractProductA {
	usefulFunctionA(): string {
		return 'The result of the product A2.';
	}
}


class ConcreteProductB1 implements AbstractProductB {
	usefulFunctionB(): string {
		return 'The result of the product B1.';
	}
	
	anotherUsefulFunctionB(collaborator: AbstractProductA): string {
		const result = collaborator.usefulFunctionA()
		return `The result of the B1 collaborating with the (${result})`;
	}
}

class ConcreteProductB2 implements AbstractProductB {
	usefulFunctionB(): string {
		return 'The result of the product B2.';
	}
	anotherUsefulFunctionB(collaborator: AbstractProductA): string {
		const result = collaborator.usefulFunctionA();
		return `The result of the B2 collaborating with the (${result})`;
	}
}


// 没太懂和工厂模式有啥区别，不都是返回一个实例吗
// 客户端调用
function clientCode(factory: AbstractFactory) {
	const productA = factory.createProductA();
	const productB = factory.createProductB();
	
	console.log(productB.usefulFunctionB());
	console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * The client code can work with any concrete factory class.
 */
console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());







export {}
