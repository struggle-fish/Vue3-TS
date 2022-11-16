function Parent (name, age) {
  this.name = name
  this.age = age
  // console.log("this:", this)
  console.log("this.name:", this.name)
}
Parent.prototype.friends = ["xiaozhang", "xiaoli"]
Parent.prototype.eat = function () {
  console.log(this.name + " 吃饭");
}
function Son (name, age, favor, sex) {
  this.favor = favor // 兴趣爱好
  this.sex = sex
  Parent.call(this, name, age)// TS继承中使用super
}
// >> 这块重复继承属性了，，原型就应该只继承方法就行，不要属性
Son.prototype = new Parent("temp", 3);
Son.prototype.constructor = Son

let sonobj2 = new Son("lisi", 34, "打篮球", "男");
//console.log("sonobj2:", sonobj2)
//console.log("sonobj2.friends:", sonobj2.friends);//undefined

// let sonobj3 = new Son("tianping", 34, "打篮球", "男");
// console.log("sonobj3:", sonobj3)
// console.log("sonobj3.friends:", sonobj3.friends);//undefined


// 缺点：
// 调用了两次父类构造函数 【 People 构造函数】 
// new People 调用构造函数带来问题： 
// 1. 进入 People 构造函数为属性赋值，分配内存空间，浪费内存；

// 2. 赋值导致效率下降一些，关键是new People 赋的值无意义，出现代码冗余，
// new Son 出来的对象和这些值毫不相干，
// 是通过子类 Son 构造函数中的 apply 来向父类People构造函数赋值。

