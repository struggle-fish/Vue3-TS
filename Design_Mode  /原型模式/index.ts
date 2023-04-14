console.log('原型模式')

/*

原型是一种创建型设计模式， 使你能够复制对象， 甚至是复杂对象， 而又无需使代码依赖它们所属的类。
所有的原型类都必须有一个通用的接口， 使得即使在对象所属的具体类未知的情况下也能复制对象。
原型对象可以生成自身的完整副本， 因为相同类的对象可以相互访问对方的私有成员变量。


*/


// 使用示例： TypeScript 的 Cloneable  （克隆） 接口就是立即可用的原型模式。
// 识别方法： 原型可以简单地通过 clone或 copy等方法来识别。

class Prototype {
	primitive: any
	component: object
	circularReference: ComponentWithBackReference
	
	clone(): this {
		const clone = Object.create(this)
		
		clone.component = Object.create(this.component)
		
		clone.circularReference = {
			...this.circularReference,
			prototype: { ...this }
		}
		
		return clone
	}
}


class ComponentWithBackReference {
	prototype
	
	constructor(prototype: Prototype) {
		this.prototype = prototype
	}
	
}



function clientCode () {
	const p1 = new Prototype()
	p1.primitive = 234
	p1.component = new Date()
	p1.circularReference = new ComponentWithBackReference(p1)
	
	
	const p2 = p1.clone()
	
	if (p1.primitive === p2.primitive) {
		console.log('Primitive field values have been carried over to a clone. Yay!');
	} else {
		console.log('Primitive field values have not been copied. Booo!');
	}
	
	if (p1.component === p2.component) {
		console.log('Simple component has not been cloned. Booo!');
	} else {
		console.log('Simple component has been cloned. Yay!');
	}
	
	if (p1.circularReference === p2.circularReference) {
		console.log('Component with back reference has not been cloned. Booo!');
	} else {
		console.log('Component with back reference has been cloned. Yay!');
	}
	
	if (p1.circularReference.prototype === p2.circularReference.prototype) {
		console.log('Component with back reference is linked to original object. Booo!');
	} else {
		console.log('Component with back reference is linked to the clone. Yay!');
	}
	
	
}



clientCode();



export {}
