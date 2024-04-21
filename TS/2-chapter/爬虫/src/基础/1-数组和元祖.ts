// 定义字符串和数字的 数组
const arr: (number | string)[] = [1, '哈哈哈']
const strArr: string[] = ['哼哼']

// 对象类型数组表达
const arrObj: {name: string, age: number}[] = [
	{
		name: '哈哈哈',
		age: 12
	}
]

// 类型别名 表达数组
type User = {name: string, age: number}
const arrObj2: User[] = [
	{
		name: '哈哈哈',
		age: 12
	}
]


// 这么去描述一个对象也是可以的
class Teacher {
	name: string;
	age: number
}

const arrObj3: Teacher[] = [
	new Teacher(),
	{
		name: '哈哈哈',
		age: 12
	}
]


console.log(arr)



// 元祖
// 元祖 用 [] 约束 注意和数组区分
const teacherInfo: [string, string, number] = ['小铜钱', '男', 12]
// 处理csv文件比较有好
const teacherList: [string, string, number][] = [
	['阳', '男', 12],
	['阳2', '男', 14],
	['阳3', '男', 15]
]

export {}
