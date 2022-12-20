// TODO: 这个函数就是被注入的
import { Userinfo } from '../entity/UserInfo';
import UserDaoImpl from '../dao/UserDaoImpl';
export default class UserServiceImpl {

  userinfoDaoImpl: UserDaoImpl = new UserDaoImpl()

  static userServiceImpl: UserServiceImpl

  static getInstance() {
    if (!this.userServiceImpl) {
      this.userServiceImpl = new UserServiceImpl()
    }
    return this.userServiceImpl
  }


  constructor() {
    console.log("UserServiceImpl构造器....");
  }

  Login(username: string, pwd: string): Userinfo {
    console.log("进入service ...Login,username:", username)

    // if (username === "admin" && pwd === "123" && role === "admin") {
    //   return true;
    // } else {
    //   return false;
    // }
    return (this.userinfoDaoImpl.findUsrByUsm(username, pwd)) as Userinfo
  }

  register() {
    // this.userinfoDaoImpl.findUsrByUsm(username, pwd) // 这里也可以复用
    console.log("我我我我我我usersevice...register-----------------")
  }
}