// undefined 和 null两者各自有自己的类型分别叫做 undefined 和 null。
// 和 void相似，它们的本身的类型用处不是很大：


let u: undefined = undefined;
let n: null = null;

// 默认情况下null和undefined是所有类型的子类型。
// 就是说你可以把 null和undefined赋值给number类型的变量。
// TODO: 但是下面会提示报错
// let str = '测试'
// str = null
// str = undefined

// TODO: strictNullChecks 指定成 true =>> null和undefined只能赋值给void和它们各自

export {}
