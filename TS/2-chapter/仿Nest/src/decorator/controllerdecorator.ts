import { router } from '../util/router'
import MethodType from '../util/methodtype'
import { RequestHandler } from 'express'

type MyClassDecorator = <T extends { new(...args: any): any }>
  (targetClass: T) => any


  export function Controller(reqRootPath: string): MyClassDecorator {
  // TODO: 这个控制器的目的是要拿到请求的，请求路径，然后在路由里使用
  return function (targetClass): any {

    // console.log("控制器装饰器执行...", targetClass); // 控制器装饰器执行... [class UserController]
    // console.log(targetClass.prototype, 'targetClass.prototype')

    for (let methodname in targetClass.prototype) {
      let routerpath = Reflect.getMetadata("path", targetClass.prototype, methodname)

      // 请求类型
      let methodType: MethodType = Reflect.getMetadata('methodType', targetClass.prototype, methodname)
       // 拿到装饰器对应的方法
      const targetMethodfunc: RequestHandler = targetClass.prototype[methodname];
      // 获取中间件装饰器保存的中间件函数元数据
      let middleawares: RequestHandler[] = Reflect.getMetadata("middleawares",
      targetClass.prototype, methodname)


      // S100理解：当执行对应routerpath时，会自动执行targetMethodfunc方法
      if (routerpath && methodType) {
        // router.get(routerpath, targetMethodfunc);// S100
        if (middleawares) {
          router[methodType](routerpath, ...middleawares, targetMethodfunc)
        } else {
          router[methodType](routerpath, targetMethodfunc)
        }
      }
    }
    

  } 
}



// TODO: 把具体的值get赋值给类型MethodType的时候，把值当类型 类型和值就相同
// type MethodType = "get" | "post" 
// let myMethodType: MethodType = "get"
// let router = { "get": function () { }, "post": function () { } }
// let methodType: string = "get"

// router[myMethodType] // TODO: 使用变量的时候，编译期间并不能推导出变量的值是 get 还是 post