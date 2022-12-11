class StringUtil {//工具类
  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, "")
  }
}

class RoleService {
  public roleName: string = "管理员"
  constructor() {
  }

  @MethodInterceptor("DistribRoles方法")
  DistribRoles(userName: string, isValid?: boolean) {// 分配角色
    console.log("分配角色.....");
  }
}

function MethodInterceptor(paramsValue: any) {
  console.log("方法装饰器....");
  return function (targetClassPrototype: any, methodName: any,
    methodDecri: PropertyDescriptor) {

    // targetMethodSave.value 表示原来目标类 HttpClient的show() 方法
    // TODO: 1.1 先保存目标类的方法到 targetMethodSave
    // console.log("进入方法装饰器：methodDecri:", methodDecri);
    let targetMethodSave = methodDecri.value; // TODO: 保存一份
    console.log("targetMethodSave:", targetMethodSave);

    // TODO: 先调用原来的方法，就是后置拦截，否则就是前置拦截
    // methodDecri.value()
    
    
    // 1.2.让value函数建立新得函数对象空间 
    //  value建立一个新的函数后,
    // RoleService 对象调用 DistribRoles; 会执行value指向的新函数
    //  并不会执行原来 RoleService 目标类中 DistribRoles 方法
    
    // TODO: 这里建立的一个新函数，拦截做些事情后继续往后走
    methodDecri.value = function (...args: any[]) {
      console.log("当前this:---", this);

      // 迭代所有参数
      args = args.map((arg) => {
        if (typeof arg === "string") {
          return StringUtil.trimSpace(arg);
        }
        return arg;
      })
      console.log(args, '参数是什么')

      // 1.4.总结:这是一种典型的用方法装饰器扩大原来方法功能的案例

      // 1.5 但如果增强原来方法功能后,还想继续执行原来RoleService类中DistribRoles方法
      // TODO: 使用apply执行targetMethodSave原来函数
      targetMethodSave.apply(this, args)
    }
    

    //  方法执行之后，继续执行后续代码
    console.log("methodDecri.value:");
  }
}

let roleService = new RoleService()
roleService.DistribRoles('我 是 测试 代 吗')