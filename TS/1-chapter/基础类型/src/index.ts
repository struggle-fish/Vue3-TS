// 学习 TS 就是学习 TS中的类型

/*

	常见的类型：基础类型， 高级类型  自定义类型  ts包中内置了很多类型
	
	什么叫类型？ TS 中冒号后面的都是类型标识，等号后面的是值
	
	ts 类型是从安全角度出发的，一切从安全角度来出发
	ts 是在开发时候来检测，不是在运行的时候，所以代码并没有被真正的执行
	ts 中具备一个类型推导的特点，不是所有的变量都需要增加类型，只有无法推断或者推断错误的时候才需要编写类型
	ts 最终编译后 类型就消失了（类型就是空气）
	
	

*/




let a: string = '小铜钱儿'

// 基础类型
// 先给js 的原始类型进行标识
// 原始数据类型 都要采用小写的类型  大写类型（包装类型）用来描述的实例

let name: string = '小铜钱'
let age: number = 18
let male: boolean = true

// 包装类型
'abc'.charAt  // 默认当我们调用基本类型的方法时，会将当前基本类型包装成对象类型



let s1: string = 'abc'
// let s2: string = new String('abc')

let s3: String = new String('abc')
let s4: String = 'abc'

// =====================================================

// 数组类型 []
// 数组的基本概念，数组是多个相同类型的数据集合， js 中数组可以随意存放任何类型
// ts 中两种方式 标注数组
// 1、类型 + [] 方式
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['a', 'b', 'c']
let arr3: (string | number)[] = [1, 2, 3, 'a', 'b', 'c']
// 2、采用泛型 Array<T>
let arr4: Array<string> = ['a', 'b', 'c']

// =====================================================


// ts 中的 元祖 （特点 长度固定，类型固定，位置固定）

let tuple: [string, number, boolean] = ['小铜钱', 18, true]

let username = tuple[0]
// let aa = tuple[3] // 没有第四个，取个der 啊

// 元祖可以通过数组的方法 进行新增，但是 只能新增已经存在的类型，而且就算放进去了也拿不出来
// tuple.push({})

tuple.push('xxxx')
// let bb = tuple[3]

// =====================================================

// ts 中的枚举  自带类型的对象
// 枚举的值 如果没有赋值，从 0 开始 递增

enum USER_ROLE {
	USER,
	ADMIN,
	SUPER_ADMIN
}

console.log(USER_ROLE["USER"])
console.log(USER_ROLE[0])

// 可以把枚举当类型来用
// let c: USER_ROLE.ADMIN = 32 // 数字类型
// console.log(c)


// 代码中的常量可以全部采用枚举类型，提示友好，使用方便
// 常量枚举不能反举（一般用不到反举，都采用常量枚举），不会生成对象，而是直接将值拿出来
const enum USER_R {
	USER = 'A',
	ADMIN = 10,
	SUPER_ADMIN = 11
}
console.log(USER_R.USER) // 	console.log("A" /* USER_R.USER */);
// =====================================================


// null undefined
// 默认情况下  null 只能赋值给 null  undefined 只能赋值给undefined
const n: null = null
const u: undefined = undefined

// 如果在非严格 null 的检测情况下  undefined 和 null 是任何类型的子类型
// const n1: null = undefined // "strictNullChecks": false,

// =====================================================


// void 类型  空类型
// 函数的返回值 可以用 void 标识，其他情况下用不到

// undefined 和void 的区别
function fn1() {} // 自动推断 void
function fn2() { return } // 自动推断 void
function fn3() { return undefined } // 自动推断undefined
function fn4(): void { return undefined } // void 包含 undefined

// =====================================================
// never 类型  任何类型的子类型
// never 意味着 这个值不可能出现, 遇到 never 后面的逻辑就不会执行了
// 1、函数无法到达终点
function whileTrue(): never {
	while (true) {}
}

// 2、抛错误
function throwError(): never {
	throw new Error()
}


function validateCheck(v: never) {}

// 校验逻辑的完整性，可以利用 never 特性，实现完整性保护
function getResult(strOrBoolOrNum: string | number | boolean) {
	// 在内部写 js 逻辑的时候，要对每个类型做处理
	// 如果是字符串  'abc' => [a, b, c]
	// 123 => [1, 2, 3]
  // true => [t, r, u, e]
	if (typeof strOrBoolOrNum === 'string') {
		return strOrBoolOrNum.split('')
	} else if (typeof strOrBoolOrNum === 'number') {
		return strOrBoolOrNum.toString().split('')
	} else if (typeof strOrBoolOrNum === 'boolean') {
		// 把布尔的逻辑补上
		return strOrBoolOrNum.toString().split('')
	}
	
	// 没有写 布尔相关的  这里就提示 布尔不能赋值给 never
	validateCheck(strOrBoolOrNum)
}

// =====================================================

// 常见基本类型
// string number boolean null undefined 枚举  元祖 数组 never void object

// Object.creat({})

// 大写的 Object 类型不用 （万物结对象， 最终都会找到Object）
function create(target: object) { // 这里 写成 Object 的话，那就是不校验了，万物结对象

}

create({})
create([])
// create(1) // 提示错误
// {} 字面量类型  {} => new Object()

// =====================================================
const sy1: symbol = Symbol()
const sy2: symbol = Symbol()
console.log(sy1 === sy2)

// =====================================================
// const big: bigint = new BigInt(Number.MAX_SAFE_INTEGER + 100)
// bigint 不能赋值给number

























































export {}



















