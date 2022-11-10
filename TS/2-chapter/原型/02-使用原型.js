function QQUsers(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_
  this.QQAge = QQAge_
  this.QQMark = QQMark_

  // 先从自己上找，找到的话，就不会去原型上去找了
  // this.commonfriends = ['骑驴看海', '大漠上的英雄', '坚实的果子', '小草']//共同好友
}

QQUsers.prototype.commonfriends = ['骑驴看海', '大漠上的英雄', '坚实的果子', '小草']//共同好友

QQUsers.prototype.show = function () {
  console.log(`QQ号:${this.QQNo},QQ龄:${this.QQAge},QQ标注:${this.QQMark}`)
  console.log(`共同的好友是:${this.commonfriends}`);
}

console.log("QQUsers.prototype:", QQUsers.prototype);
/*

QQUsers.prototype={
  constructor: ƒ QQUsers(QQNo_, QQAge_, QQMark_)
  __proto__: Object
}

*/

let QQLisi = new QQUsers("30424232", 10, "袁隆平的徒弟")
console.log("QQLisi:", QQLisi)