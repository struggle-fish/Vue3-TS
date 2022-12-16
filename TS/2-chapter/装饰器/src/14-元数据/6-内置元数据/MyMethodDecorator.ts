import 'reflect-metadata'
type MethodDecorator = <T>(target: Object, propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

export function get(injectid?: string): MethodDecorator {
  return (targetprototype, methodname, descriptor) => {
    console.log(" 进入方法装饰器....targetprototype", targetprototype);
    console.log(" 进入方法装饰器....methodname", methodname);
    const methodParamTypeArr = Reflect.getMetadata("design:paramtypes", targetprototype, methodname);
    console.log("design:paramtypes:", methodParamTypeArr)

    const methodReturnTypeArr = Reflect.getMetadata("design:returntype", targetprototype, methodname);
    console.log("design:returntype:", methodReturnTypeArr)
    console.log("方法装饰器结束========================");
  }
}