console.log('生成器/建造者模式')

// 使用示例： 生成器模式是 TypeScript 世界中的一个著名模式。 当你需要创建一个可能有许多配置选项的对象时， 该模式会特别有用。
// 识别方法： 生成器模式可以通过类来识别， 它拥有一个构建方法和多个配置结果对象的方法。
// 生成器方法通常支持方法链 （例如 someBuilder.setValueA(1).setValueB(2).create()）。


interface Builder {
	producePartA(): void
	producePartB(): void
	producePartC(): void
}



class ConcreteBuilder1 implements Builder {
	private product!: Product1;
	
	constructor() {
		this.reset()
	}
	
	reset(): void {
		this.product = new Product1()
	}
	
	producePartA() {
		this.product.parts.push('PartA1');
	}
	producePartB() {
		this.product.parts.push('PartB1');
	}
	producePartC() {
		this.product.parts.push('PartC1');
	}
	
	getProduct(): Product1 {
		const result = this.product
		this.reset()
		return result
	}
	
}



class Director {
	private builder!: Builder
	
	setBuilder(builder: Builder): void {
		this.builder = builder
	}
	
	
	buildMinimalViableProduct(): void {
		this.builder.producePartA()
	}
	
	buildFullFeatureProduct(): void {
		this.builder.producePartA()
		this.builder.producePartB()
		this.builder.producePartC()
	}
}


function clientCode(director: Director) {
	const builder = new ConcreteBuilder1()
	
	director.setBuilder(builder)
	console.log('Standard basic product:');
	director.buildMinimalViableProduct()
	builder.getProduct().listParts()
	
	
	console.log('Standard full featured product:');
	director.buildFullFeatureProduct()
	builder.getProduct().listParts()
	
	// Remember, the Builder pattern can be used without a Director class.
	console.log('Custom product:');
	builder.producePartA();
	builder.producePartC();
	builder.getProduct().listParts();
}


const director = new Director();
clientCode(director);





class Product1 {
	parts: string[] = []
	
	listParts(): void {
		console.log(`Product parts: ${this.parts.join(', ')}\n`);
	}
}











export {}
