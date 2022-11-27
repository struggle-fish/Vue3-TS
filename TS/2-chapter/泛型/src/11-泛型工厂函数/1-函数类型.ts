// 工厂函数类型定义：代表任意一个类的构造函数【等价JS的构造函数】的函数类型。
/*

**泛型工厂函数定义**：一个可以创建任意类对象的通用泛型函数

泛型工厂函数应用场景： 
使用场景1：在一些不方便或者没有办法直接 new  类名（）格式来创建对象，
例如：后面讲解的装饰器中就多次用到。
使用场景2：在一些项目测试或者调试中简化代码使用。

通过工厂函数的学习，既可以加深对泛型函数的理解；
同时也可以扩大技术视野，提升代码整合能力；
还为一些优秀前端技术打下更雄厚的技术根基【例如：为理解装饰器中各种复杂代码打下技术根基】。


*/ 

// 函数类型复习
type promiseFuncType = (resolve: string, reject: string) => any
// promiseFuncType 表示一种函数类型  
// promiseFunc 是 promiseFuncType 函数类型的变量
let promiseFunc: promiseFuncType = function (resolve, reject): void {
  console.log(resolve,reject)
}

class Promise {
  constructor(promiseFunc: promiseFuncType) {
    promiseFunc("sucess", "fail");
  }
}

let promise = new Promise(function (resolve, reject): void {
  console.log(resolve,reject)
})



export { }















