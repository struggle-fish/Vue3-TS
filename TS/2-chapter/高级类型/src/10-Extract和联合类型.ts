// Extract 是TS提供的一个TS高级type类型【简称TS高级类型】
type Extract<T, U> = T extends U ? T : boolean

// TS 
type beginType1 = string | number extends string ? string | number : never// never
type extractUnionType = Extract<string | number, string>//string || never
type extractUnionType2 = Extract<string | number, number>//number

// 分解判断
type beginType3 = string extends string | number ? string : never// string

type beginType4 = number extends string | number ? number : never// number

type extractUnionType3 = Extract<string, string | number>//string
type extractUnionType4 = Extract<number, string | number>//number

// TODO:  注意查看这个返回
type extractUnionType5 = Extract<number | string | symbol, number | string> // string number ?

// 联合类型的断言===复习
function test(str: string | number, count: string) {
  str as number;
  count as string | number

}

export { }