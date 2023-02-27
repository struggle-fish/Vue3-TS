// 可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

class Octopus {
	readonly name: string
	readonly numberOfLegs: number = 0
	
	constructor(theName: string) {
		this.name = theName
	}
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.



// >> 参数属性可以方便地让我们在一个地方定义并初始化一个成员

class Octopus2 {
	readonly numberOfLegs: number = 0
	
	// 注意看我们是如何舍弃了 theName，仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。
	// 参数属性通过给构造函数参数前面添加一个访问限定符来声明。
	// 使用 private限定一个参数属性会声明并初始化一个私有成员；
	// 对于 public和 protected来说也是一样。
	constructor(readonly name: string) {
	}
}

export {}















