import 'reflect-metadata'
type MyMethodDectoratorType = (
  targetClassPrototype: any,
  methodname: string,
  dataprops: PropertyDescriptor
) => void


export function get (reqPath:string): MyMethodDectoratorType {
  console.log('方法装饰器------------')
  return function( targetClassPrototype, methodname, dataprops) {
    console.log("进入到方法饰器", "reqPath:", reqPath);

    Reflect.defineMetadata('path', reqPath, targetClassPrototype, methodname)
  }
}