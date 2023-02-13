// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
// 意思就是，相信我，我知道自己在干什么


// 语法格式:
// <T>xxx

let someValue:any = 'this is a string'
let strLength: number = (<string>someValue).length


// as

let strLength2: number = (someValue as string).length

// TODO: 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。

export {}













