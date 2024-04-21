


const getPerson = (person: Person) => {
	console.log(person.name)
}

const setPerson = (person: Person,name: string) => {
	person.name = name
}

interface Person {
	name: string,
	age?: number,
	[propName: string]: any
}
const person = {
	name: '铜钱',
	sex: '男'
}
// ts对字面量 是强校验的
// 字面量形式
// getPerson({
// 	name: '哈哈',
// 	sex: '男'
// })
// 非字面量形式，没做强校验
getPerson(person)

class User implements  Person {
	name = '小铜钱';
	
	[propName: string]: any;
	
}

// 接口的继承
interface Teacher extends Person {
	teacher(): string
}






// 用接口描述函数
// 函数签名
interface SayHi {
	(word: string): string
}

const say: SayHi = (word: '哈哈') => {
	return word
}



export {}
