// infer 的定义：
// infer 表示在  extends 条件语句中以占位符出现的用来修饰数据类型的关键字，
// 被修饰的数据类型等到使用时才能被推断出来。

/*


**infer 占位符式的关键字出现的位置**：
通常infer出现在以下三个位置上。
（1）infer 出现在 extends 条件语句后的函数类型的参数类型位置上
（2）infer 出现在 extends 条件语句后的函数类型的返回值类型上
（3）infer 会出现在类型的泛型具体化类型上。




*/


//（1）infer 出现在 extends 条件语句后的函数类型的参数类型位置上
interface Customer {
  custname: string
  buymoney: number
}

type custFuncType2 = (cust: Customer, str:string) => void// 函数类型 
type custFuncType = (cust: Customer) => string// 函数类型 
//（1）infer 出现在 extends 条件语句后的函数类型的参数类型位置上
type inferType<T> = T extends (params: infer P) => any ? P : T
//type inferType<custFuncType>= (cust: Customer) => string extends (params:infer P)=>any?P:T

// TODO: 其实还是没太懂，简单来说，就是，想获取函数传参，参数的类型
type inferResultType = inferType<custFuncType> // TODO: 这个输出了P
type inferResultType2 = inferType<custFuncType2> // TODO: 这个输出了T
export { }
























