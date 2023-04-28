console.log('装饰器模式')

// 使用示例： 装饰在 TypeScript 代码中可谓是标准配置， 尤其是在与流式加载相关的代码中。

// 识别方法： 装饰可通过以当前类或对象为参数的创建方法或构造函数来识别。



interface Component {
	operation(): string
}

class ConcreteComponent implements Component {
	operation(): string {
		return `ConcreteComponent`
	}
}


class Decorator implements Component {
	protected component: Component
	
	constructor(component: Component) {
		this.component = component
	}
	
	operation(): string {
		return this.component.operation()
	}
}


class ConcreteDecoratorA extends Decorator {
	operation(): string {
		return `ConcreteDecoratorA(${super.operation()})`;
	}
}


class ConcreteDecoratorB extends Decorator {
	public operation(): string {
		return `ConcreteDecoratorB(${super.operation()})`;
	}
}

function clientCode(component: Component) {
	// ...
	
	console.log(`RESULT: ${component.operation()}`);
	
	// ...
}


/**
 * This way the client code can support both simple components...
 */
const simple = new ConcreteComponent();
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated component:');
clientCode(decorator2);










export {}
