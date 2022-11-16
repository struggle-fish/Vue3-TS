// 原型链继承
// 继承带来的好处
//  子类对象变量可以访问父类的实例属性
//  子类对象变量可以访问父类原型对象空间中的属性和方法

function Parent (name, age) {
  this.name_p = name
  this.age_p = age
}
Parent.prototype.friends_p = ["xiaozhang", "xiaoli"]
Parent.prototype.eat_p = function () {
  console.log(this.name_p + " 吃饭");
}


function Son (favor, sex) {
  this.favor_s = favor // 兴趣爱好
  this.sex_s = sex
}

let parent = new Parent("王五", 23);
console.log("parent:", parent)
let sonobj = new Son("打篮球", "男");
console.log("sonobj:", sonobj)

console.log("Son.prototype:", Son.prototype)


// 原型链继承
Son.prototype = new Parent("王六", 38);

// >>> 引用的问题 会影响父类constructor，指向错乱
// Son.prototype = Parent.prototype

// 导致的问题: S199执行后会让Son.prototype
// 和Parent.prototype和sonobj2.__proto指向的原型对象空间
// [Parent.prototype指向的原型对象空间]指向Son构造函数对象空间
//  这违背了Parent原型对象空间中的constructor属性必须指向Parent构造函数对象空间


// S199 指向了Son构造函数对象空间 
Son.prototype.constructor = Son;// 让Son类的对象或函数原型.prototype指向的原型对象空间【new Parent()对象空间】有一个constructor属性
//【new Parent()对象空间】有一个constructor属性指向Son构造函数对象空间

// let prototype={};
// prototype.constructor="abc"
// 等价于 let prototype={constructor:"abc"} 
//   let prototype=new Object(){constructor:"abc"}

console.log("Son.prototype 原型链继承之后的指向1:", Son.prototype)

//  局限性：不能通过子类构造函数向父类构造函数传递参数 
// 也就是 lisi 这些虽然传了，但是父类没接收
let sonobj2 = new Son("lisi", 34, "打篮球", "男");
let sonobj3 = new Son("wukong", 39, "打篮球", "男");
let sonobj4 = new Son("zhangsan", 48, "打篮球", "男");





console.log("sonobj2:", sonobj2)
console.log("sonobj2访问son类自身的favor属性【构造函数中this定义的对象属性】:",
  sonobj2.favor_s)
console.log("sonobj2访问son对象原型上的name属性:", sonobj2.name_p)
console.log("sonobj2访问friends属性:", sonobj2.friends_p)




// 而且原型继承会把所有的都继承过来，浪费



// 原型链继承查找属性和方法的完整路线描述: 
// 子对象首先在自己的对象空间中查找要访问的属性或方法，如果找到，就输出，
// 如果没有找到，就沿着子对象中的__proto__属性指向的原型对象空间中去查找有没有这个属性或方法，
// 如果找到，就输出，如果没有找到，继续沿着原型对象空间中的__proto__查找上一级原型对象空间中的属性或方法，
// 直到找到Object.prototype原型对象属性指向的原型对象空间为止，如果再找不到，就输出null