console.log('工厂模式')


// 工厂方法是一种创建型设计模式， 解决了在不指定具体类的情况下创建产品对象的问题。

// 工厂方法定义了一个方法， 且必须使用该方法代替通过直接调用构造函数来创建对象 （ new操作符） 的方式。
// 子类可重写该方法来更改将被创建的对象所属类。


interface Product {
	operation(): string
}


abstract class Creator {
	public abstract factoryMethod(): Product
	
	public someOperation(): string {
		const product = this.factoryMethod()
		return `Creator: The same creator's code has just worked with ${product.operation()}`;
	}
}



class ConcreteCreator1 extends Creator {
	factoryMethod(): Product {
		return new ConcreteProduct1();
	}
}


class ConcreteCreator2 extends Creator {
	factoryMethod(): Product {
		return new ConcreteProduct2();
	}
}


class ConcreteProduct1 implements  Product {
	operation(): string {
		return '{Result of the ConcreteProduct1}';
	}
}

class ConcreteProduct2 implements Product {
	operation(): string {
		return '{Result of the ConcreteProduct2}';
	}
}



function clientCode(creator: Creator){
	console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
	console.log(creator.someOperation());
}


console.log('App: Launched with the ConcreteCreator1.');

clientCode(new ConcreteCreator1());

console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());



