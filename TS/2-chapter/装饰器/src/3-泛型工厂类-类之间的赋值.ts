// typeof LoggerSonClass 等价 new (...args:any)=>LoggerSonClass
class Test {
  age!: number
}

let targetClass: any = Test

class LoggerSonClass extends Test {
  public name: string = "test"
  methodone() {
    console.log("methodone:", this.name)
  }
}
// TODO: 用一个变量缓存下Test 先赋值父类，在赋值子类
// TODO: LoggerSonClass 继承了 Test
let TestCopy = Test
TestCopy = LoggerSonClass;
let test = new TestCopy();
(test as any).methodone();
export { }