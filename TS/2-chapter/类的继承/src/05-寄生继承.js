//父类 【父构造函数】
function People (name, sex, phone) {
  this.name = name;
  this.sex = sex;
  this.phone = phone;
}

People.prototype.doEat = function () {
  console.log(this.name + "吃饭...")
}

//ChinesePeople子类【子构造函数】
function ChinesePeople (name, sex, phone, national) {

  People.call(this, name, sex, phone)
  this.national = national; // 民族
}
// 寄生组合继承实现步骤
// 第一步: 创建一个寄生构造函数
function Middle () {
  this.count = 23
}
// 只继承了 父类的原型，没有属性
Middle.prototype = People.prototype
// 第二步:创建一个寄生新创建的构造函数的对象
let middle = new Middle();
// 第三步:ChinesePeople子类的原型对象属性指向第二步的新创建的构造函数的对象
ChinesePeople.prototype = middle // 实例去继承原型
ChinesePeople.prototype.constructor = ChinesePeople


let chinesePeopleTwo = new ChinesePeople("王海", "男", "1111", "汉族");
let chinesePeopleOne = new ChinesePeople("约克夏", "女", "1111", "傣族");

console.log("chinesePeopleOne:", chinesePeopleOne);
console.log("chinesePeopleTwo:", chinesePeopleTwo);


