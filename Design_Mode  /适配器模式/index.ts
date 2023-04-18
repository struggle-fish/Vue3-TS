console.log('适配器模式')

/*

使用示例： 适配器模式在 TypeScript 代码中很常见。 基于一些遗留代码的系统常常会使用该模式。
 在这种情况下， 适配器让遗留代码与现代的类得以相互合作。

识别方法： 适配器可以通过以不同抽象或接口类型实例为参数的构造函数来识别。
				当适配器的任何方法被调用时， 它会将参数转换为合适的格式，
				然后将调用定向到其封装对象中的一个或多个方法。

*/



class Target {
	request(): string {
		return `'Target: The default target\\'s behavior.`
	}
}

class Adaptee {
	specificRequest(): string {
		return `.eetpadA eht fo roivaheb laicepS`
	}
}

class Adapter extends Target {
	private adaptee: Adaptee
	
	constructor(adaptee: Adaptee) {
		super();
		this.adaptee = adaptee
	}
	
	request(): string {
		const result = this.adaptee.specificRequest().split('').reverse().join('')
		return `Adapter: (TRANSLATED) ${result}`;
	}
}

/**
 * The client code supports all classes that follow the Target interface.
 */

function clientCode(target: Target) {
	console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

console.log('');


const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');


console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);




export {}
