// __decorate方法最后一句代码
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    // argsnum 参数个数
    var argsnum = arguments.length;
    // targetinfo 被装饰器修饰的目标【类或属性或方法或方法参数，本案例为类】
    // argsnum=2 装饰器修饰的是类或者构造器参数，targetinfo=target[类名]
    // argsnum=4 装饰器修饰的是方法【第四个参数desc等于null] targetinfo=该方法的数据属性【desc = Object.getOwnPropertyDescriptor(target, key) 】
    // argsnum=3 装饰器修饰的是方法参数或者属性,targetinfo=undefined
    // TODO: getOwnPropertyDescriptor 这个方法返回的是一个新的空间-需要配合0111处重新设置回去
    var targetinfo = argsnum < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;//S100
    // decorator保存装饰器数组元素
    var decorator;
    // 元数据信息,支持reflect-metadata元数据
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        targetinfo = Reflect.decorate(decorators, target, key, desc);
    } else {
      //  装饰器循环,倒着循环,说明同一个目标上有多个装饰器，执行顺序是倒着执行
      for (var i = decorators.length - 1; i >= 0; i--) {
        if (decorator = decorators[i]) {
          // 如果参数小于3【decorator为类装饰器或者构造器参数装饰器】执行decorator(targetinfo)直接执行decorator装饰器，并传递目标targetinfo，这里是类
          // 如果参数大于3【decorator为方法装饰器】 直接执行 decorator(target, key, targetinfo) 
          // 如果参数等于3 【decorator为方法参数装饰器或者属性装饰器】 直接执行decorator(target, key)
          // targetinfo最终为各个装饰器执行后的返回值,但如果没有返回值,直接返回第S100行的targetinfo
          targetinfo = (argsnum < 3 ? decorator(targetinfo) : argsnum > 3 ?
            decorator(target, key, targetinfo) : decorator(target, key)) || targetinfo;
          // 增加一句
          console.log("targetinforesult:", targetinfo)
        }
      }

    // TODO: 0111 - Object.defineProperty 为什么用呢，因为getOwnPropertyDescriptor 返回的是新的空间
    return argsnum > 3 && targetinfo && Object.defineProperty(target, key, targetinfo), targetinfo;
  }
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.trimSpace = function (str) {
        return str.replace(/\s+/g, "");
    };
    return StringUtil;
}());
var RoleService = /** @class */ (function () {
    function RoleService() {
        this.roleName = "管理员";
    }
    RoleService.prototype.DistribRoles = function (userName, isValid) {
        console.log("分配角色.....");
    };
    __decorate([
        MethodInterceptor("DistribRoles方法")
    ], RoleService.prototype, "DistribRoles", null);
    return RoleService;
}());
function MethodInterceptor(paramsValue) {
    console.log("方法装饰器....");
    return function (targetClassPrototype, methodName, methodDecri) {
        // targetMethodSave.value 表示原来目标类 HttpClient的show() 方法
        // TODO: 1.1 先保存目标类的方法到 targetMethodSave
        // console.log("进入方法装饰器：methodDecri:", methodDecri);
        var targetMethodSave = methodDecri.value; // TODO: 保存一份
        console.log("targetMethodSave:", targetMethodSave);
        // TODO: 先调用原来的方法，就是后置拦截，否则就是前置拦截
        // methodDecri.value()
        // 1.2.让value函数建立新得函数对象空间 
        //  value建立一个新的函数后,
        // RoleService 对象调用 DistribRoles; 会执行value指向的新函数
        //  并不会执行原来 RoleService 目标类中 DistribRoles 方法
        // TODO: 这里建立的一个新函数，拦截做些事情后继续往后走
        methodDecri.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("当前this:---", this);
            // 迭代所有参数
            args = args.map(function (arg) {
                if (typeof arg === "string") {
                    return StringUtil.trimSpace(arg);
                }
                return arg;
            });
            console.log(args, '参数是什么');
            // 1.4.总结:这是一种典型的用方法装饰器扩大原来方法功能的案例
            // 1.5 但如果增强原来方法功能后,还想继续执行原来RoleService类中DistribRoles方法
            // TODO: 使用apply执行targetMethodSave原来函数
            targetMethodSave.apply(this, args);
        };
        //  方法执行之后，继续执行后续代码
        console.log("methodDecri.value:");
    };
}
var roleService = new RoleService();
roleService.DistribRoles('我 是 测试 代 吗');
