// 定义Goods接口
const goodSymid = Symbol("goodid")
interface Goods {
  [goodSymid]: number
  name: string
  price: number
}

// 实现数据扁平化 [准备]
// Record类型
type Record<K extends keyof any, T> = {
  [P in K]: T
}
type resultGoodsType = Record<string , Goods>
//let goodRecord: Record<string | number, Goods> = {}
let goodRecord: Record<string, Goods> = {}
let good: Goods = { [goodSymid]: 101, "name": "苹果", "price": 9 }
//{101: { [goodSymid]: 101, "name": "苹果", "price": 9 },
//香蕉: { [goodSymid]: 101, "name": "苹果", "price": 9 },
//}
goodRecord[103] = good;
goodRecord["香蕉"] = good
goodRecord[good[goodSymid]] = good
//输出结果:goodRecord: { '101': { name: '苹果', price: 9, [Symbol(goodid)]: 101 } }
console.log("goodRecord:", goodRecord);



// >>>> =============字符串可以接纳数字====================
// type testType = {
//   name: string,
//   [x: number]: any
// }
// //let testobj:testType={name: "wangwu",101:"ere","103":"df","d104":"df"}
type testType = {
  name: string,
  [x: string]: any
}
// [x: string] 可以代表[x: string] 也可以表示[x: number]
// TODO: [x: string]可以是字符串类型，数字类型 symbol类型

let testobj: testType = {
  name: "wangwu",
  101: "ere", "103": "df", age: "df", goodSymid: "kkk"
}

export { }