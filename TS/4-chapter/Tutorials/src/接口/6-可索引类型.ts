// 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型



// StringArray接口，它具有索引签名。
// 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值
interface StringArray {
	[index: number]: string
}


let myArray: StringArray
myArray = ['bob', 'fred']

// 使用 number 索引
let myStr: string = myArray[0]


// 由于 JS 索引可以使用：字符串和数字。 TS 也同时支持两种索引签名
// 当使用 number来索引时，JS 会将它转换成 string 然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引
// 但是 TS 却可以不完全一样，下面做一个测试

class Animal {
	name: string
}

class Dog extends Animal {
	breed: string
}

interface INotOKay {
	[x: number]: Animal
}


// Notice: TS 字符串和数字类型的索引返回值可以不同，不同时，`数字类型的索引返回值` 必须是 `字符串类型的索引返回值` 类型的子类型
interface IAllOKay {
	[x: number]: Animal,
	[x: string]: Animal
}
interface IOKay {
	[x: number]: Dog,
	[x: string]: Animal
}


// 字典模式.
interface INumberDictionary {
	[index: string]: number;
	length: number;
	name: number
}








export {}












