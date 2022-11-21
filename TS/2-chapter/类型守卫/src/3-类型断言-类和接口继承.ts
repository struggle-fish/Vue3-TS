// A 是类，B 是接口，并且 A 类实现了 B 接口【implements】
// 则 A 的对象变量可以断言成 B 接口类型，同样 B 接口类型的对象变量也可以断言成A类型 。

interface People {
  username: string, age: number, address: string, phone: string
}

class Stu implements People {
  public username!: string
  public age!: number;
  public address!: string// 类型 "Stu" 中缺少属性 "address"，但类型 "typestu2" 中需要该属性。t
  public phone!: string
  public kk() {

  }
  // get value() {

  //   return this.username
  // }

  // set value(newVal) {
  //   this.username = newVal
  // }
  constructor(username: string, age: number, address: string) {
    //  super(username, age);
    this.address = address;
  }
}


let people: People = { username: "wangwu", age: 23, address: "11", phone: "111" }
let result = people as Stu;//正确
let result2 = <Stu>people;// 类型转换 正确

let stu = new Stu("wangwu", 23, "北京")
stu as People;// 正确


export { }


