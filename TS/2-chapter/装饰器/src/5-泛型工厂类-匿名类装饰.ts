
// 需求：对已经开发好的项目中的任何一个类，创建实例时，
// 打印日志信息，
// 输出哪一个类被创建了,并输出传递了哪些参数信息
// let obj:object={name:"wangwu"}
// obj.name
//  1.完成日志信息的装饰器
function LoggerInfoDecorator<T extends { new(...args: any): any }>
  (targetClass: new (...args: any) => Test) {

  return class extends targetClass {
    constructor(...args: any) {
      super(...args)
      console.log("日志信息...targetClass:", (targetClass as any).name);
    }
    methodone() {
      console.log("methodone:", this.name);
    }
  }

  //return LoggerSonClass
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

let test = new Test("wer");//LoggerSonClass
(test as any).methodone();

