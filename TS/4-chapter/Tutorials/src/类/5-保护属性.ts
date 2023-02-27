// TODO:
//  protected
// protected修饰符与 private修饰符的行为很相似，
// 但有一点不同， protected成员在派生类中仍然可以访问。例如：


class Person {
	protected name: string
	
	constructor(name: string) {
		this.name = name
	}
}

class Employee extends Person {
	private department: string
	
	constructor(name: string, department: string) {
		super(name);
		this.department = department
	}
	getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
	
}

let howard = new Employee('Howard', 'Sales')

console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误 protected 成员不可访问

//>> 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如

class Person2 {
	protected name: string
	protected constructor(theName: string) {
		this.name = theName
	}
}

class Employee2 extends Person2 {
	private department: string
	
	constructor(name: string, department: string) {
		super(name);
		this.department = department
	}
	getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	}
}

let howard2 = new Employee2("Howard", "Sales");
// let john = new Person2("John"); // 错误: 'Person' 的构造函数是被保护的.



// TODO:
// 保护属性只有 派生类 可以获取。外部不能获取
// 私有属性外部不能获取

// 构造函数也能为保护属性 这样可以作为只能继承的类使用
// 构造函数的保护属性使得该类只能用于继承，实例化都会被禁止.

export {}
