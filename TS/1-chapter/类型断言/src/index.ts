// 学习 TS 就是学习 TS中的类型

/*




*/

// 声明一个变量没有给类型的时候，默认类型就是 any

let name
name = '小铜钱' // 等号左边的类型，可以通过右边的值自动推导，此时就不需要添加类型了
name = 18
name = {}


// const let 区别，const 意味着值不能发生变化，类型范围更小，let 可以改变值，会推断的范围大
let a = '小铜钱'
// a = 1 // 类型自动推导了

// 联合类型  联合类型在没有确定值之前，只能采用联合类型中的方法
// 只有确定特定类型后，才能使用对应的方法
let strOrNumber: string | number

// ! 非空断言，我断定这个变量一定有值，出错了， 我自己负责
// strOrNumber!.toString()

// strOrNumber.toString()

// 直接赋值
// strOrNumber = 'abc'
// strOrNumber.charAt(1)


// strOrNumber = 12
// strOrNumber.toFixed()




function fn(strOrNumber: string | number) {
	// strOrNumber.toString  // 只能使用共同拥有的方法
}



// 联合类型 是并集还是交集呢？ 是并集  约等于 ||
// 并集意味着 全部的意思
// 交集意味着  两个共有的



// 非空断言
let ele = document.getElementById('root')
ele!.style.background = 'red' // 我断定这个元素就是存在的，一定有值

// ?.  js 语法，叫链判断运算符，这个值没有就不取值了
// ! 意味着 这个值存在，ts 语法

// ?? || && 都是 js语法

let r1 = null || 'a' // a
console.log(r1, '---r1')
let r2 = null ?? 'b'
console.log(r2, '---r2')
let r3 = 0 ?? 'c' // 0 也是 false 但是可以返回
console.log(r3, '---r3')



// 我们需要将某个类型直接作为类型来使用， 类型断言，
// MD 这个太特么强大了，以前js 类型就那么多，现在好了，类型你自己创造了，喝喝


let strOrNumber1: string | number
// 我就想调用 toLowerCase 方法  断言只能断言成一个已经存在的类型，如果不存在不能直接断言
// (strOrNumber1! as string).toLowerCase()
// (<number>strOrNumber1!).toFixed()



// strOrNumber1! as boolean
// 类型 "string | number" 到类型 "boolean" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"。
// 类型“number”不可与类型“boolean”进行比较。

// 就要逆天而行  -> 不推荐
// strOrNumber1! as any as boolean


// 断言：我自己可以指定特定的类型



// 字面量类型 和 联合类型一起使用，就更加灵活了

// type 关键字 和 enum 都是ts 提供的 和 js没关系
type Direction = 'up' | 'down' | 'left' | 'right'

let direction: Direction = 'down' // 字面量类型 就是 限定了 值  和枚举类似





































































export {}



















