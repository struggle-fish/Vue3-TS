// 1 不带参数的方法装饰器
/**
 * @param targetClassPrototype 原型链
 * @param key 被装饰的方法名
 * @param methodDecri 方法描述 数据属性 包括下面的属性
        interface PropertyDescriptor {
              configurable?: boolean;
              enumerable?: boolean;
              value?: any;
              writable?: boolean;
              get?(): any;
              set?(v: any): void;
          }
 */
function MyMethodDecorator(targetClassPrototype: any, key: string, methodDecri: PropertyDescriptor) {
  console.log("targetClassPrototype:", targetClassPrototype)
  console.log("key:", key);
  console.log("数据属性", methodDecri)
  
	methodDecri.value() // 被装饰的函数本身-此处为DistribRoles方法
}

class RoleService {
  public roleName: string = "管理员"
  constructor() {
  }

  @MyMethodDecorator
  DistribRoles() {// 分配角色
    console.log("分配角色.....");
  }
}
export { }
