
// 需求：对已经开发好的项目中的任何一个类，创建实例时，
// 打印日志信息，
// 输出哪一个类被创建了,并输出传递了哪些参数信息

//  1.完成日志信息的装饰器
// TODO: targetClass 这里不能是any类型，否则 S1-11处不允许
function LoggerInfoDecorator(targetClass: any) {
  class LoggerSonClass extends targetClass {
    constructor(...args: any) {
      super(...args)
      console.log("日志信息...targetClass:", targetClass.name);
    }
  }
  // TODO: 返回这个又不行 LoggerSonClass
  return LoggerSonClass
}
// 2. 目标类
// @LoggerInfoDecorator // S1-11
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
// TODO: 外部创建类的时候，其实是创建的是包裹类
//let test = new Test("wer");