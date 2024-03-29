import 'reflect-metadata'
import CollectionInstance from './Collection'
type MyParameterDecorator = (target: any,
  paramname: string | symbol, parameterIndex: number) => void;

  export default function InjectContructor(injectid?: string): MyParameterDecorator {
  return (target, paramname, paramindex) => {


    console.log(" 进入构造函数的参数装饰器22222....", target);
    console.log("获取类构造器参数类型组成的数组....")
    const constructorParamTypeArr =
    Reflect.getMetadata("design:paramtypes", target);
    console.log("design:paramtypes:", constructorParamTypeArr)
    console.log('paramindex----当前索引是多少----', paramindex)
    let injectInstance = new constructorParamTypeArr[paramindex]()//   //new UserService()
    CollectionInstance.set(injectid!, injectInstance);
    console.log("构造器装饰器结束========================");

  }
}