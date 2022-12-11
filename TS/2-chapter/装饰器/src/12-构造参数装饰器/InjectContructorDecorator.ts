import 'reflect-metadata'
import collectionInstance from './Collection'
type MyParameterDecorator = (
  target: Object,
  paramname: string | symbol,
  parameterIndex: number) => void;


export function InjectContructor(injectid?: string): MyParameterDecorator {
  return (targetClass, paramname, paramindex) => {
    // targetClass类==获取的是使用这个装饰器的类，本例是UserController类
    console.log("targetClass:", targetClass)
    console.log("paramname:", paramname)
    console.log("paramindex:", paramindex)

    const constructorParamArr = Reflect.getMetadata("design:paramtypes", targetClass);
    let constrParamArrObj = new constructorParamArr[paramindex]()
    console.log(constructorParamArr, '------constructorParamArr')
    console.log("constrParamArrObj[paramindex]:", constrParamArrObj[paramindex])
    collectionInstance.set(injectid!, constrParamArrObj);
  }
}

export { }