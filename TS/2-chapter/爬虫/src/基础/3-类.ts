// class Person {
// 	constructor(private name: string) {
// 	}
// 	get getName() {
// 		return this.name
// 	}
// }
//
// const person = new Person('阳')
// // 注意，这里不是方法
// console.log(person.getName)



class Person {
	constructor(private _name: string) {
	}
	get name() {
		return this._name
	}
	set name(name: string) {
		const realName = name.split(' ')[0]
		this._name = realName
	}
}

const person = new Person('阳')
// 注意，这里不是方法
console.log(person.name)
person.name = '哈哈哈'
console.log(person.name)



// 单例模式
class Demo {
	private constructor(public name: string) {}
	private static instance: Demo
	
	static getInstance() {
		if (!this.instance) {
			this.instance = new Demo('单例')
		}
		return this.instance
	}
	
}
const d1 = Demo.getInstance()
const d2 = Demo.getInstance()
console.log(d1 === d2 ,'这两个相等吗')



export {}
