// 高级技巧？  既是值又是类型

// 构造函数

// 当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型
// 也就是，可以把类  当成类型来用
/*
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}
// TODO: Greeter 可以当类型
//  let greeter: Greeter，意思是 Greeter类的实例的类型是 Greeter
let greeter: Greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

*/


// 我们也创建了一个叫做 构造函数的值。 这个函数会在我们使用 new创建类实例的时候被调用。
// 下面我们来看看，上面的代码被编译成JavaScript后是什么样子的

/*
let Greeter = (function () {
	function Greeter(message) {
		this.greeting = message;
	}
	Greeter.prototype.greet = function () {
		return "Hello, " + this.greeting;
	};
	return Greeter;
})();

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());
*/

/*
let Greeter将被赋值为构造函数。
当我们调用 new并执行了这个函数后，便会得到一个类的实例。
这个构造函数也包含了类的所有静态属性。 换个角度说，
我们可以认为类具有 实例部分与 静态部分这两个部分。
*/



class Greeter {
	static standardGreeting = "Hello, there";
	greeting: string;
	greet() {
		if (this.greeting) {
			return "Hello, " + this.greeting;
		}
		else {
			return Greeter.standardGreeting;
		}
	}
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

// 变量保存了这个类或者说保存了类构造函数
// 取Greeter类的类型，而不是实例的类型。 或者更确切的说，
// "告诉我 Greeter标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());



// >> 把类当做接口使用
// 类定义会创建两个东西：类的实例类型和一个构造函数。
// 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。

class Point {
	x: number
	y: number
}
interface Point3d extends Point {
	z: number
}
let point3d: Point3d = {
	x: 1,
	y: 3,
	z: 4
}


let fn = (): string => {
	return 'a'
}



export {}





