
console.log(1)
type func1Type = (one: number, two: string) => string
type func2Type = (one: number) => string

// 函数的泛型约束
// 函数类型上的泛型约束 参数类型和返回值完全相同的情况下，
//  参数少的函数类型 extends 参数多的函数类型 返回true
//  参数多的函数类型 extends 参数少的函数类型 返回false
type beginType1 = func1Type extends func2Type ? func1Type : never// never
type beginType2 = func2Type extends func1Type ? func2Type : never// never

type extractType1 = Extract<func1Type, func2Type>//never
type extractType2 = Extract<func2Type, func1Type>//= (one: number) => string



// 1-基础复习 函数参数和回调函数

let func: func1Type = function(one: number, two: string) : string {
  return 'abc'
}

// 参数少一个也行的
let func2: func1Type = function(one: number) : string {
  return 'abc'
}



function testFunc(func: func1Type) {
  func(3, 'abc')
}

// 回调函数
testFunc(function(a: number, b: string): string {
  console.log(a, b, '啊哈哈哈----11')
  return b
})





export { }