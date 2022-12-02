// 2-理解 K extends keyof any


type Worker = {
  custname: string
}
type Customer = {
  custname: string,
  age: number
}

// TODO: 注意，这里any => string | number | symbol
type oneType<K> = K extends keyof any ? K : never
//type oneAnyType = keyof any// = type oneAnyType=string | number | symbol

//type oneResultType = oneType<Worker>//never

let count: number = 3;
type twoResultType = oneType<number>// number
let strName: string = "abc";
type threeResultType = oneType<typeof strName>// string

// TODO: 3被当成值类型 是一个类型 返回3也是一个值类型
type fourResultType = oneType<3> 

let stuSymid: symbol = Symbol["stuid"]
type symType = typeof stuSymid//symbol
type fiveResultType = oneType<symbol>//symbol

export { }











