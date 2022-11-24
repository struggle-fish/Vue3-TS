// 深度掌握 T extends object + extends keyof 的综合运用
// 1. 理解 keyof  所有属性名的联合类型

/*
keyof 表示获取一个类或者一个对象类型 或者一个接口类型的所有属性名[ key ]
组成的联合类型。
[如果类或者对象类型或者接口上只有一个属性，那么就是一个单一的属性名的类型]



*/

// key就是属性名 这里的key为 address phone descri
let obj = { address: "博鳌", phone: 1111, descri: "顺利" }
// type myobjtype = typeof obj //S98

// type keyofobj = keyof myobjtype
// S99 "address" | "phone" | "descri"

type keyofobjtype = keyof typeof obj; // S100=S98+S99的效果
let keyofobj: keyofobjtype = "address"


type objType2 = { username: string, age: number }
type valueType = objType2["age"]
interface objType { username: string, age: number }


let obj2: objType = { username: "博鳌", age: 1111 }
type obj2keyofType = keyof objType // obj2keyofType="username"|"age"



// 注意：1类型的值只能是它自身就是1
type iBoolean = boolean | 1 | 0 //  iBoolean由boolean类型和1类型和0类型构成的联合类型
let iValid:iBoolean = 0
if(Boolean(iValid)){
  console.log("合法");
}

export { }











