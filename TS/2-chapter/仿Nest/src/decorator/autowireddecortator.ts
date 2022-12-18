import 'reflect-metadata'
import collectionInstance from '../collection'

type MyPropDecorator = (targetClassPrototype: any, propertyKey: string | symbol) => void

export default function Autowired(injectid: string): MyPropDecorator {
  return (targetClassPrototype, propertyKey) => {

    // PropClass = UserServiceInter 伪接口类
    let PropServiceClass: any = Reflect.getMetadata("design:type",
      targetClassPrototype, propertyKey)
  
    // let PropClass = Reflect.getMetadata('design:type', targetClassPrototype, propertyKey)
    // console.log(PropClass, 'propclass---这是什么') // UserServiceImpl
    // console.log(targetClassPrototype, 'targetClassPrototype----') // {}
    // let PropClassObj = new PropClass()


      //  增加开始....
    let PropServiceImplClass = PropServiceClass.getServiceImplClass();

    let PropServiceImplClassObj = new PropServiceImplClass();
    console.log(PropServiceImplClassObj, '------------PropServiceImplClassObj');

    // TODO: 依赖注入存储方式第一种方式, 不优雅，有风险
    // 增加结束....
    // collectionInstance.set(propertyKey, PropClassObj);

    // 对比: Object.defineProperty
    // TODO: 好处: 由于targetClassPrototype 原型+propertyKey 一起是绝对不会被覆盖的
    // 充分保证了数据属性中的value的对象的唯一性
    // TODO: 依赖注入存储方式第二种方式
    Reflect.defineProperty(
      targetClassPrototype,
      propertyKey,
      {
        value: PropServiceImplClassObj
      }) // 修改为 PropServiceImplClassObj
  }
}