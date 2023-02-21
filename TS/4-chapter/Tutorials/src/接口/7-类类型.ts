// TypeScript也能够用它来明确的强制一个类去符合某种契约。

// >>

interface ClockInterface {
	currentTime: Date
}

class Clock implements ClockInterface {
	currentTime: Date
	constructor(h: number, m: number) {
	}
}



// >> 在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：
interface ClockInterface2 {
	currentTime: Date
	setTime(d: Date)
}

class Clock2 implements ClockInterface2 {
	currentTime: Date
	
	setTime(d: Date) {
		this.currentTime = d
	}
	
	constructor(h: number, m: number) {
	}
}


// >> 类静态部分与实例部分的区别
// 静态部分的类型和实例的类型
// TODO: 当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：

interface ClockConstructor {
	new(hour: number, minute: number)
}
// TODO: 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
// class Clock3 implements ClockConstructor {
// 	currentTime: Date;
// 	constructor(h: number, m: number) { }
// }

// 为构造函数所用
interface ClockConstructor3 {
	new(hour: number, minute: number): ClockInterface3
}

// 为实例方法所用
interface ClockInterface3 {
	tick()
}

function createClock(ctor: ClockConstructor3, hour: number, minute: number) : ClockInterface3{
	// 关键在于 `ctor: IClockConstructor` ctor 指一个构造函数。并且类型检查通过了，说明类型指向正确。
	// 也就是说，类实现一个接口是，接口只对类的实例部分进行类型检查，这点是无法更改的。但是我们可以将接口
	// 拆分为两个部分，构造器签名(构造函数接口), 普通的类接口。关键在于: 将构造器签名返回的值类型指向，类接口.
	return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface3 {
	constructor(h: number, m: number) {
	}
	tick() {
		console.log('DigitalClock-tick')
	}
}

class AnalogClock implements ClockInterface3 {
	constructor(h: number, m: number) {
	}
	tick() {
		console.log('AnalogClock-tick')
	}
}
let digital = createClock(DigitalClock, 12, 19)
let analog = createClock(AnalogClock, 9, 32)









export {}







