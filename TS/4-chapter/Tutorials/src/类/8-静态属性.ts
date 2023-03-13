// 静态属性
// 那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员
// 这些属性存在于类本身上面而不是类的实例上。

/*
我们使用 static定义 origin，因为它是所有网格都会用到的属性。
每个实例想要访问这个属性的时候，都要在 origin前面加上类名。
如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
*/





class Grid {
	static origin = {x: 0, y: 0};
	calculateDistanceFromOrigin(point: {x: number; y: number;}) {
		// TODO：Grid.origin 静态属性
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	}
	constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));



// ## demo2: 静态属性搭配 public(默认) private

class Person {
	private static getPersonName() {}
}
class Employee extends Person {}

const employee = new Employee();

// Error: 实例对象是不允许访问静态属性或方法的
// employee.getPersonName

// 由于父类 static 是私有方法，子类也是不能访问这个静态方法的.
// Employee.getPersonName

// ## demo3: 静态属性搭配：proceted
// Notice: 修饰符 proceted static 不能搭配使用.
// class Bear {
//   constructor(name: string) {}
//   protected static
// }

// ## demo4: 构造函数使用：proceted
// Notice: 修饰符 static 不能用于构造函数.
// class Bird {
//   static constructor(name: string) {}
// }




export {}
