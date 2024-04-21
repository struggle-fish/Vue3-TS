class Person {
	constructor(public name: string) {
	}
	
	
}


// 抽象类
abstract class Geom {
	// 抽象方法
	abstract getArea(): number
	
	getType() {
		return '类型'
	}
}


// 抽象类只能被继承，不能被new
class Circle extends Geom {
	getArea(): number {
		return 0;
	}
}








export {}
