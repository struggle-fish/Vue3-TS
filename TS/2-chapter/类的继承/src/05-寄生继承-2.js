function People (name, sex, phone) {//父类 【父构造函数】
  this.name = name;
  this.sex = sex;
  this.phone = phone;
}

People.prototype.doEat = function () {
  console.log(this.name + "吃饭...")
}

function ChinesePeople (name, sex, phone, national) {//ChinesePeople子类【子构造函数】

  People.call(this, name, sex, phone)
  this.national = national;//民族
}


//寄生组合继承实现步骤
// 构建一个共用的寄生组合继承函数【最佳原型继承模式】
//function createNewProtoypeObj (rootprototype, son) {
// function createNewProtoypeObj (parent, son) {
//   // 第一步: 创建一个寄生构造函数
//   function Middle () {
//     this.count = 23
//     this.constructor = son
//   }
//   Middle.prototype = parent.prototype
//   // 第二步:创建一个寄生新创建的构造函数的对象
//   let middle = new Middle();
//   return middle
// }




// 复用性
// 通用度比 Object.create 实现寄生组合继承模式更高，灵活度也更高
function _extends (parent, son) {//继承
  // 第一步: 创建一个寄生构造函数
  function Middle () {
    this.count = 23
    this.constructor = son
  }
  Middle.prototype = parent.prototype
  // 第二步:创建一个寄生新创建的构造函数的对象
  let middle = new Middle();//middle.__proto__=parent.prototype
  return middle
}
// let obj={}
// obj.__proto__= parent.prototype
// ChinesePeople.prototype=obj;

let middle = _extends(People, ChinesePeople);
console.log("middle:", middle)
// 第三步:ChinesePeople子类的原型对象空间指向第二步的新创建的构造函数的对象
// ChinesePeople.prototype = createNewProtoypeObj(People.prototype,
//      ChinesePeople);
// ChinesePeople.prototype = createNewProtoypeObj(People,
//   ChinesePeople);
ChinesePeople.prototype = middle
//ChinesePeople.prototype.constructor = ChinesePeople;

let chinesePeopleTwo = new ChinesePeople("王海", "男", "1111", "汉族");
let chinesePeopleOne = new ChinesePeople("约克夏", "女", "1111", "傣族");

console.log("chinesePeopleOne:", chinesePeopleOne);
console.log("chinesePeopleTwo:", chinesePeopleTwo);


