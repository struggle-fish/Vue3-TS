import { UserService } from './UserService'
import collection from './Collection'
import InjectContructor from './InjectContructorDecorator'
import { get } from './MyMethodDecorator'
import { InjectProperty } from './MyPropertyDecorator'
class UserController {

  @InjectProperty("userService")
  private userService!: UserService
  //(@InjectContructor("userService")

  // constructor(@InjectContructor("UserService") private peopleService?: UserService, count?: number) {
  // }

  constructor(private peopleService?: UserService, count?: number) {
  }

  @get("/path")
  public login(username: string, pwd: string): boolean {
    // TODO: 注意这里如何获取 userService 的
    let peopleServiceInstace = collection.get("userService");
    peopleServiceInstace.login();
    console.log("进入login方法...")
    return true
  }
}
let controller = new UserController();
controller.login("wangwu", "df");

export { }