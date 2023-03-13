// 存取器
// 支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

class Employee {
	fullName: string
}

let employee = new Employee()
// 可以随意的设置 fullName，这是非常方便的，但是这也可能会带来麻烦。
employee.fullName = '小铜钱'
if(employee.fullName) {
	console.log(employee.fullName)
}


// 先检查用户密码是否正确，然后再允许其修改员工信息
let passcode = 'secret passcode'
class Employee2 {
	private _fullName : string
	
	get fullName(): string {
		return this._fullName
	}
	set fullName(newName: string) {
		if (passcode && passcode == 'secret passcode') {
			this._fullName = newName
		} else {
			console.log("Error: Unauthorized update of employee!");
		}
	}
}

let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
	alert(employee2.fullName);
}

/*
	对于存取器有下面几点需要注意的：
	
首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。
其次，只带有 get不带有 set的存取器自动被推断为 readonly。
这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。


*/


export {}










