function Person(name) {
	this.name = name
	this.getName = function () {
		console.log(this.name)
	}
}


let p1 = new Person('张三')
let p2 = new Person('李四')
console.log(p1.getName === p2.getName) // false




// 为了复用，和节省内存空间，getName 放到原型上

function Person2(name) {
	this.name = name
}

// prototype 类的原型，实例共享
Person2.prototype.getName = function () {
	console.log(this.name)
}




// js 中的原型
/*

函数和对象
	函数是一种对象
	对象都是通过函数创建的

*/

// 函数为什么是对象
function Person3() {}
// 函数也是对象
console.log(Person3 instanceof  Object) // true

// ====================================

// 语法糖定义对象
let obj1 = {
	name: 'obj1'
}
// 上面的等价于下面的 => 对象都是通过函数创建的
let obj11 = new Object()
obj11.name = 'obj11'


// ====================================
// prototype
/*
	每个函数都有一个属性叫做  prototype
	prototype 的属性值是一个对象，默认的只有一个叫做 constructor 的属性，指向的这个函数本身
	每个对象都有一个隐藏的属性 __proto__ 这个属性引用了创建这个对象的函数的 prototype



	自定义函数的 prototype 是由Object创建，所以它的 __proto__ 指向的是Object.prototype
	Object.prototype的 __proto__ 指向的是 null



	自定义函数 Foo.__proto__ 指向 Function.prototype
	Object.__proto__ 指向Function.prototype
	Function.__proto__指向Function.prototype


	Function.prototype的 __proto__也指向Object.prototype


* */

// ============================

function foo(a, b) {
	return a + b
}
console.log(foo(1, 2))

// 上面是语法糖啊，等价于下面的形式

let foo = new Function('a', 'b', 'return a+b')
console.log(foo(1,2))



// ============================
// instanceof

/*

	instanceof 运算符的第一个变量是一个对象 暂时称为A， 第二个变量一般是一个函数，暂时称为B
	instanceof 的判断规则是，沿着A的 __proto__ 这条线来找，同时沿着B的 prototype 这条线来找，
	如果两条线能找到同一个引用，即同一个对象，
	那么就返回 true ,如果找到终点还未重合，则返回 false


*/

console.log(Object instanceof Function) // true
console.log(Function instanceof Object) // true
console.log(Function instanceof Function) // true


// ============================
// 原型链

/*

  访问一个对象的属性时，先在基本属性中查找，如果没有，
  再沿着 __proto__ 这条链条向上找，这就是原型链

  hasOwnProperty 可以区分一个属性到底是自己的还是从原型中找到的

* */

function Foo() {
	this.a = 10
}
Foo.prototype.b = 20
let f = new Foo()
console.log(f.a)
console.log(f.b)
console.log(f.hasOwnProperty('a')) // true
console.log(f.hasOwnProperty('b')) // false




// ============================
// 原型优势
// 可以随意扩展
// 可以重写继承的方法






































