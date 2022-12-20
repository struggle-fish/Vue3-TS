import { router } from '../util/router'
type MethodType = "get" | "post"

export default MethodType

type MyClassDecorator = <T extends { new(...args: any): any }>
  (targetClass: T) => any

// TODO: 这个控制器的目的是要拿到请求的，请求路径，然后在路由里使用
export function Controller(reqRootPath: string): MyClassDecorator {
  return function (targetClass): any {
    console.log("控制器装饰器执行...");

    for (let methodname in targetClass.prototype) {
      let routerpath = Reflect.getMetadata("path", targetClass.prototype, methodname)
      
      // 拿到装饰器对应的方法
      const targetMethodfunc = targetClass.prototype[methodname];
      // S100理解：当执行对应routerpath时，会自动执行targetMethodfunc方法
      console.log(routerpath, 'routerpath-------')
      console.log(targetMethodfunc, 'targetMethodfunc-------')
      if (routerpath) {
        router.get(routerpath, targetMethodfunc);// S100
      }
    }

  } 
}