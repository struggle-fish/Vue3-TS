import 'reflect-metadata'
import Autowired from '../decorator/autowireddecortator'
import UserServiceImpl from '../service/UserServiceImpl'
import UserServiceInter from '../service/UserServiceInter'
import CollectionInstance from '../collection/'
import Singleton from '../decorator/singletondecorator'
// 10-21 【仿 Nestjs 装饰器实战】 依赖注入实现和升级自动装配装饰器
//  实现步骤   1. 建立伪接口类 UserServiceInter
//            2. 修改UserService的名字为userServiceImpl类
//            3. 修改自动装配装饰器【Autowired】代码:见增加和修改部分
//          最后别忘了修改UserController中的login方法中的S100中的属性名为userServiceImpl
class UserController {


  // @Autowired("userServiceImpl", true) // 传递是否是单例模式 职责模糊，做了两个事儿
  @Autowired("userServiceImpl")
  @Autowired("userServiceImpl")
  @Autowired("userServiceImpl")//  修改Inject 为更专业的 Autowired 单词
  @Singleton(true) // 是否开启单例模式
  private userServiceImpl!: UserServiceInter // 修改Inject 为更专业的 Autowired 单词

  public login(): void {
    // TODO: 获取 userService 这个类，并调用里面的方法
    // TODO: 第一种方式存储在全局对象里，直接获取，容易被覆盖
    // 增加....
    // let userService: UserService = CollectionInstance.get("userService");
    // userService.register();

    // TODO: 第二种方式 放到了类的属性上，类是不会重名的
    let UserServiceImplA: UserServiceImpl = Reflect.getOwnPropertyDescriptor(UserController.prototype, "userServiceImpl")?.value //S100
    console.log('000----UserServiceImpl', UserServiceImpl)
    UserServiceImplA.register();
  }
} 
let controller = new UserController();
controller.login();

export { }