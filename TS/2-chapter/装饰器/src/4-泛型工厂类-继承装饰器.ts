
// 需求：对已经开发好的项目中的任何一个类，创建实例时，
// 打印日志信息，
// 输出哪一个类被创建了,并输出传递了哪些参数信息

// TODO: 明确object 类型反而报错，是因为，程序并不知道object上有name
// let obj:object={name:"wangwu"}
// obj.name


//  1.完成日志信息的装饰器
function LoggerInfoDecorator<T extends { new(...args: any): any }>
  (targetClass: new (...args: any) => Test) {

  class LoggerSonClass extends targetClass {
    constructor(...args: any) {
      super(...args)
      console.log("日志信息...targetClass:", (targetClass as any).name);
    }
    methodone() {
      console.log("methodone:", this.name);
    }
  }

  return LoggerSonClass
}
// 2. 目标类
// 类型 "typeof LoggerSonClass" 没有调用签名。
@LoggerInfoDecorator
class Test {
  name!: string;
  age!: number
  // 1.先执行原来构造函数
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name, "吃饭");
  }
}
export { }

// TODO:扔出来的是包裹类
let test = new Test("wer");//LoggerSonClass
(test as any).methodone();

//let LoggerSonClass = LoggerInfoDecorator<typeof Test>(Test)
type TestConstructorType = new (...args: any) => Test
//let LoggerSonClass = LoggerInfoDecorator<TestConstructorType>(Test)


let LoggerSonClass = LoggerInfoDecorator(Test)
let LoggerSonClassInstance = new LoggerSonClass("王五");
LoggerSonClassInstance.methodone();