// A，B 如果是类，但没有继承关系

// 两个类中的任意一个类的所有的 public 实例属性【不包括静态属性】加上所有的 public 实例方法和另一个类的所有 public
// 实例属性加上所有的 public 实例方法完全相同或是另外一个类的子集，
// 则这两个类可以相互断言，否则这两个类就不能相互断言。




// 类型断言中的不能相互重叠问题:
//   两个类之间断言的规则:
//   两个类中任意一个的属性和方法是另一个类的属性和方法完全相同或子集，则这两个类可以相互断言
//   否则这两个类就不能相互断言




class People {
  constructor(
    public username: string,
    public age: number,
    public address: string
  ) {

  }
}

class Stu {
  public  username!: string
  public age!: number;
  public address!: string// 类型 "Stu" 中缺少属性 "address"，但类型 "typestu2" 中需要该属性。t
  public phone!:string;
  constructor(username: string, age: number, address: string) {
    //  super(username, age);
    this.address = address;
  }
  // public study(){

  // }

}



let people = new People("wangwu", 23, "beijing")
let stuedConvert = people as Stu;//
//let stuedConvert = <Stu>people;//

//stuedConvert.study();

let stu = new Stu("wangwu", 23, "北京")
let peopledConvert=stu as People;// 
//peopledConvert.

export { }