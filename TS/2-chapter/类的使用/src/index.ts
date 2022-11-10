class Person {

  // 类上定义的属性一定是描绘这个类本身特征的变量，不能把一些无关的变量定义成类属性
  public name: string = '江小鱼'
  public age: number = 18
  public phone: string = '123213123'

  // 引用数据-数组
  public friends: Array<string> = ['小红', '小兰']
  // public friends: string[] = ['小红', '小兰']
  
  // 引用数据-函数类型的属性【属于引用属性的一种】
  resolveFn: () => void = () => {}

  // 对象的变量=实例的变量=类的【非静态的】属性=简称属性
  //  实例属性或者对象属性
  constructor(name: string, age: number, phone: string) {
    this.name = name
    this.age = age
    this.phone = phone
  }

  public doEat(who: string, address: string) {
    console.log(`${this.name}和${who}吃饭，在${address}`)
  }

  public doStep() {}

}

// 方法2： 通过构造函数 【构造器】来赋值
// 创建对象一共做了三件事
// 第一件事: 在堆中为类的某个对象【实例】分配一个空间
// 第二件事：调用对应的构造函数【构造器】并且把构造器中的各个参数值赋值给对象属性
//   new Person()自动匹配无参数的构造器
// 第三件事：把对象赋值给对象变量 【把实例赋值给实例变量】
let zhangsanPerson = new Person('张三', 23, '11111')
zhangsanPerson.doEat("李四", "王府井")

console.log(zhangsanPerson)