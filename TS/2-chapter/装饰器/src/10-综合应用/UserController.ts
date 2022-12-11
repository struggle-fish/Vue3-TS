import { UserService } from './UserService'
import { Inject } from './injectdecortator'
import { get } from './methoddecorator'
import { Controller } from './controllerDecorator'



@Controller('/')
class UserController {
  
  @Inject('userService')
  private userService?: UserService

  @get("/login")
  login() {}
}


export {}