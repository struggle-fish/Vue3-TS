function Parent (name, age) {
  this.name_p = name
  this.age_p = age
}
Parent.prototype.friends_p = ["xiaozhang", "xiaoli"]
Parent.prototype.eat_p = function () {
  console.log(this.name_p + " 吃饭");
}


function Son (name, age, favor, sex) {
  // 冒充对象继承，也就是，Parent把对象借给了 Son
  // 或者是 Son 冒充 Parent
  // Parent.call(Son, name, age)
  Parent.call(this, name, age)
  this.favor_s = favor // 兴趣爱好
  this.sex_s = sex
}

let sonobj2 = new Son('lili', 23, '打篮球', '男')
console.log(sonobj2) // 只能访问属性，不能访问原型上的方法


