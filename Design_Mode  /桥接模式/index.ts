console.log('桥接模式')
// 桥接是一种结构型设计模式， 可将业务逻辑或一个大类拆分为不同的层次结构， 从而能独立地进行开发。
// 层次结构中的第一层 （通常称为抽象部分） 将包含对第二层 （实现部分） 对象的引用。
// 抽象部分将能将一些 （有时是绝大部分） 对自己的调用委派给实现部分的对象。 所有的实现部分都有一个通用接口， 因此它们能在抽象部分内部相互替换。


// 使用示例： 桥接模式在处理跨平台应用、 支持多种类型的数据库服务器或与多个特定种类 （例如云平台和社交网络等） 的 API 供应商协作时会特别有用。

// 识别方法： 桥接可以通过一些控制实体及其所依赖的多个不同平台之间的明确区别来进行识别。

interface Implementation {
	operationImplementation(): string
}


class Abstraction {
	protected implementation: Implementation
	
	constructor(implementation: Implementation) {
		this.implementation = implementation
	}
	
	operation(): string {
		const result = this.implementation.operationImplementation()
		return `Abstraction: Base operation with:\n${result}`;
	}
}



class ExtendedAbstraction extends Abstraction {
	operation(): string {
		const result = this.implementation.operationImplementation()
		return `ExtendedAbstraction: Extended operation with:\n${result}`;
	}
}



class ConcreteImplementationA implements Implementation {
	operationImplementation(): string {
		return 'ConcreteImplementationA: Here\'s the result on the platform A.';
	}
}


class ConcreteImplementationB implements Implementation {
	operationImplementation(): string {
		return 'ConcreteImplementationB: Here\'s the result on the platform B.';
	}
}



function clientCode(abstraction: Abstraction) {
	// ..
	
	console.log(abstraction.operation());
	
	// ..
}



/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

console.log('');

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);












export {}
