// T extends object
// 【是泛型约束的一种表现】泛型约束简单点说就是把泛型的具体化数据类型范围缩小


/*

**理解T extends object** ：
extends 表示具体化的泛型类型只能是 object 类型，
某个变量如果能断言成 object 类型【变量 as object】，
那么这个变量的类型就符合 T extends object 。
就是说该变量的类型可以是T的具体化类型。

还记得之前说的new底层发生了什么?  
任何一个类或者构造函数的底层都是从 new Object ( )而来，
这个 new Object ( )对象的类型就是 object 类型。
这就是说任何类的对象或者构造函数的对象都符合T extends object。


*/


class Container<T extends object> {
  t!: T
  constructor(t_: T) {
    this.t = t_
  }

  show(): T{
    console.log(this.t)
    return this.t
  }
}


let obj2: object = { username: "lisi", age: 23 }
// object可以具体化T extends object,T就是object类型
// let c = new Container<string>(obj2) // 报错
let c = new Container<object>(obj2)
c.show();


// >> ====================================

type objtype = { username: string, age: number }
let obj: objtype = { username: "wangwu", age: 23 }
//obj as object // 类型断言
let obj3 = <object>obj;// 类型转换

// objtype可以具体化T extends object,具体化后T就是objtype类型
let c2 = new Container<objtype>(obj)
c2.show();


// >> ====================================
class Customer { // js function Customer(){} new Object()
  constructor(public name: string) {

  }
}
let cust = new Customer("wangwu");
let c3 = new Container<Customer>(cust)
c3.show();


































