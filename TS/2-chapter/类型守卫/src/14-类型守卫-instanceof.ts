// instanceof 格式： 对象变量 instanceof  类名或函数名
// instanceof 的主要作用： 
// instanceof 帮助我们准确的判断一种自定义函数或类创建的对象变量的数据类型。
// instanceof 执行后 返回 true 的几种条件【符合一个即可】
// （1） 对象变量.__proto__=类名或函数名.prototype。 
// 解释1：
// 如果 instanceof  关键字 左边对象变量的 __proto__ 属性指向的原型对象空间=右边类名或函数名的 
// prototype 对象属性指向的原型对象空间，那么 返回 true。

// （2）对象变量.__proto__.__proto__...._proto__=类名或函数名.prototype。
// 解释2： instanceof 左边对象变量 __proto__的1到多个上一级__proto__指向的原型对象空间，等于右边类名或函数名的 prototype 对象属性指向的原型对象空间，
// 那么也返回 true，按照这个查找规律，会一直找到Object.prototype 对象属性指向的原型对象空间为止。



class Vechile {
  static count: number = 3;
  public brand: string;// 品牌
  public vechileNo: string;// 车牌号
  public days: number;// 租赁天数
  public total: number = 0;// 支付的租赁总费用
  public deposit: number;// 押金
  constructor(brand_: string, vechileNo_: string, days_: number, deposit_: number) {
    this.brand = brand_;
    this.vechileNo = vechileNo_;

    this.days = days_;
    this.deposit = deposit_;
    console.log("constructor Vechile=>this.brand:", this.brand)
  }
  // 计算租赁车的价格 ( calculateRent)
  public calculateRent() {
    console.log("calculateRent来自Vechile=>this.brand:", this.brand)

    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
    return 0;
  }
  //支付押金的方法( payDesposit)
  payDesposit() {
    console.log(this.brand + " 车牌号为:" + this.vechileNo + " 支付了:" + this.deposit);
  }

  //  安全检测方法（safeShow)
  public safeShow() {
    console.log("车规则....");
    console.log(this.brand + " 车牌号为:" + this.vechileNo + " 违规了:");
  }

}

// 子类Car类 独有属性为type_ 
class Car extends Vechile {
  // public brand: string = "nobrand"
  public type: string;//车的型号
  constructor(brand_: string, vechileNo_: string, days_: number,
    deposit_: number, type_: string) {
    //  Vechile.call(this,brand_, vechileNo_, days_, total_, deposit_)
    super(brand_, vechileNo_, days_, deposit_);
    this.type = type_;

  }
  // 根据车的型号来获取租用一天该型号车的租金
  public getPriceByType() {
    let rentMoneyByDay: number = 0;//每天的租金
    if (this.type === "普拉多巡洋舰") {
      rentMoneyByDay = 800;
    } else if (this.type === "凯美瑞旗舰版") {
      rentMoneyByDay = 400;
    } else if (this.type === "威驰智行版") {
      rentMoneyByDay = 200;
    }
    return rentMoneyByDay;
  }

  public calculateRent() {//方法重写 [override]
    // this.safeShow();// 寄生组合继承模式 middle()
    super.calculateRent();  //=Vechile.prototype.calculateRent.call(this)
    console.log("Car:", Car.count)
    console.log("this.brand:", this.brand)
    this.total += this.days * this.getPriceByType();
    return this.total;
  }
  public checkIsWeigui(isOverWeight: boolean) {
    if (isOverWeight) {
      this.total += this.total + 500;
    }
  }
}

class Bus extends Vechile {
  public seatNum: number // 座位数
  constructor(brand_: string, vechileNo_: string, days_: number,
    deposit_: number, seatNum_: number) {
    //  Vechile.call(this,brand_, vechileNo_, days_, total_, deposit_)
    super(brand_, vechileNo_, days_, deposit_);//使用父类的构造函数的好处
    this.seatNum = seatNum_;
    if (this.seatNum > 200) {
      throw new Error("座位数不能超过200");
    }
  }

  public getPriceBySeatNum() { //计算租赁价格
    let rentMoneyByDay: number = 0;//每天的租金
    if (this.seatNum <= 16) {
      rentMoneyByDay = 800;
    } else if (this.seatNum > 16) {
      rentMoneyByDay = 1600;
    }
    return rentMoneyByDay;
  }
  public calculateRent() {

    super.calculateRent();
    this.total += this.days * this.getPriceBySeatNum();
    return this.total;
  }

  public checkIsOverNum(isOverWeight: boolean) {
    if (isOverWeight) {
      this.total = this.total + 2000;
    }
  }
}

class Truck extends Vechile {
  ton!: number // 座位数
  constructor(brand_: string, type_: string,
    days_: number, deposit_: number, ton_: number) {
    super(brand_, type_, days_, deposit_);
    this.ton = ton_;
    if (this.ton < 300 || this.ton > 2000) {
      throw new Error("吨数在300-2000吨之间");
    }
  }

  checkIsOverWeight(isOverWeight: boolean) {
    if (isOverWeight) {
      console.log("超载了");
      this.total = this.total + 2000;
    }
  }
  CalRentPrice() {//计算租赁价格
    let rentMoneyByDay: number = 0;//每天的租金
    if (this.ton <= 500) {//500吨
      rentMoneyByDay = 750;
    } else if (this.ton > 500) {
      rentMoneyByDay = 1350;
    }
    return rentMoneyByDay;
  }
  public calRent() {
    return this.CalRentPrice() * this.days;
  }

  public calDesposit() {
    return this.deposit;

  }
}
class StringUtil {//工具类

  public static trimSpace(str: string): string {
    return str.replace(/\s+/g, "")
  }
}
class Customer {

  rentVechile(vechile: Bus | Truck | Car) {

    if (vechile instanceof Car) {
      vechile.checkIsWeigui(true);
    } else if (vechile instanceof Bus) {
      vechile.checkIsOverNum(true);
    } else if (vechile instanceof Truck) {
      vechile.checkIsOverWeight(true)
    }
    return vechile.calculateRent();
    //<Bus>vechile 效果= vechile as Bus
    //vechile as unknown
    //vechile.calculateRent()
    //(vechile as Bus).checkIsOverNum(true)
  }

}

let car = new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版")
let cust = new Customer();
console.log("顾客最后的租金是:", cust.rentVechile(car));
// if (car instanceof Car) {
//   console.log("car是一个Car类的实例对象变量");
// }
// if (car instanceof Vechile) {
//   console.log("car是一个Vechile类的实例对象变量");
// }

// if (car instanceof Object) {
//   console.log("car是一个Object类的实例对象变量");
// }
// if (car instanceof Bus) {
//   console.log("car是一个Bus类的实例对象变量");
// }
//let cust = new Customer();
//let total = cust.rentVechile(new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版"))


export { }