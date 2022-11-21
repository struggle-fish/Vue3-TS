// 如果 A 是类，B 是 type 定义的数据类型
// 【就是引用数据类型，例如 Array, 对象，不能是基本数据类型，
// 例如 string，number,boolean】，
// 并且有 A 类实现了 B type 定义的数据类型【 implements】，
// 则 A 的对象变量可以断言成 B type 定义的对象数据类型，
// 同样 B type 定义的对象数据类型的对象变量也可以断言成 A 类型 。


type People = {
  username: string, age: number, address: string, phone: string
}

class Stu implements People {
  public username!: string
  public age!: number;
  public address!: string// 类型 "Stu" 中缺少属性 "address"，但类型 "typestu2" 中需要该属性。t
  public phone!: string
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

let stu = new Stu("wangwu", 23, "北京")
stu as People;// 正确


export { }