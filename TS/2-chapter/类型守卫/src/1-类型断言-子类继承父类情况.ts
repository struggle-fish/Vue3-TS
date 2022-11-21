// 类型断言和类型转换
/*
  类型断言定义
  把两种能有重叠关系的数据类型进行相互转换的一种TS语法
  把其中一种数据类型转换成另外一种数据类型。
  类型断言和类型转换产生的效果一样，但是语法格式不同
  格式：A as B
  重要细节：理解重叠关系
  1、A  B 是类，同时存在继承关系

  【 extends 关系】无论 A，B 谁是父类或子类， A 的对象变量可以断言成 B 类型，B 的对象变量可以断言成A类型 。但注意一般在绝大多数场景下都是把父类的对象变量断言成子类。
*/



class People {
  public myusername!: string;
  public myage!: number;
  public address!: string
  public phone: string
  constructor() {

  }
  eat() {

  }
  step() {
    console.log("People=>step");
  }

}

class Stu extends People {
  public username!: string
  public age!: number;
  public address!: string// 类型 "Stu" 中缺少属性 "address"，但类型 "typestu2" 中需要该属性。t

  constructor(
    username: string,
    age: number,
    address: string,
    public phone: string
  )
  {
    //  super(username, age);
    super();
    this.address = address;
  }
  study() {

  }

}



let people = new People()

//let result = people as Stu;// 类型断言 正确
let result = <Stu>people;// 类型转换 正确
result.study();

let stu = new Stu("wangwu", 23, "北京", "123")
let result2=stu as People;// 正确


export { }













