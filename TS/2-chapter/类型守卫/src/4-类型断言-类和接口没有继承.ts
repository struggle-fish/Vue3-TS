// A 是类，B 是接口，并且 A 类没有实现了 B 接口
interface People {
  username: string, age: number, address: string, phone: string
}

class Stu {
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

let stu = new Stu("wangwu", 23, "北京")
stu as People;// 正确


export { }