
import 'reflect-metadata'

type MyPropDecorator = (targetClassPrototype: any, propertyKey: string | symbol) => void

export default function Singleton(isSingleton?: boolean): MyPropDecorator {

  return (targetClassPrototype, propertyKey) => {
    
    console.log(propertyKey, 'propertyKey1111111--------------') // userServiceImpl

    let PropServiceClass: any = Reflect.getMetadata('design:type', targetClassPrototype, propertyKey) // UserServiceInter
    let ServiceImplClass: any = PropServiceClass.getServiceImplClass()
    let ServiceImplInstanceOrClass
    

    let metaSingleton = Reflect.getMetadata('singleton', targetClassPrototype, propertyKey)
    console.log(metaSingleton, '这是什么-------metaSingleton')
    if (isSingleton) {
      if (!metaSingleton) {
        Reflect.defineMetadata('singleton', isSingleton, targetClassPrototype, propertyKey)
        ServiceImplInstanceOrClass = ServiceImplClass.getInstance()
      } else {
        console.log('单例模式创建-----使用上一次对象')

      }
    } else {
      // 把创建的权利交出去
      ServiceImplInstanceOrClass = ServiceImplClass;
    }

    // 保存对象或者类
    Reflect.defineMetadata('ServiceImplInstanceOrClass', ServiceImplInstanceOrClass, targetClassPrototype, propertyKey)

  }
}