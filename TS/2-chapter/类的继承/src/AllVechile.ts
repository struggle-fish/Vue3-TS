// 父类：Vechile   交通工具。
class Vechile {
  static count: number = 3;
  brand!: string; // 品牌
  vechileNo!: string; // 车牌号
  days: number = 1; // 租赁天数
  total: number = 0; // 支付的租赁总费用
  deposit: number = 0; // 押金

  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    deposit_: number
  ) {
      this.brand = brand_
      this.vechileNo = vechileNo_
      this.days = days_
      this.deposit = deposit_

      console.log("constructor Vechile=>this.brand:", this.brand)
  }

  // 计算租赁车的价格 ( calculateRent)
  calculateRent() {
    console.log("calculateRent来自Vechile=>this.brand:", this.brand)

    console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
    return 0;
  }

  //支付押金的方法( payDesposit)
  payDesposit() {
    console.log(this.brand + " 车牌号为:" + this.vechileNo + " 支付了:" + this.deposit);
  }

  //  安全检测方法（safeShow)
  safeShow() {
    console.log("车规则....");
    console.log(this.brand + " 车牌号为:" + this.vechileNo + " 违规了:");
  }

}


class Car extends Vechile {
  type: string;

  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    deposit_: number,
    type_: string
  ) {
    super(brand_, vechileNo_, days_, deposit_);
    this.type = type_;
  }

  // 根据车的型号来获取租用一天该型号车的租金
  getPriceByType() {
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


  // private   是私有的访问修饰符 只允许在本类中方法，子类中不可以
  // protected 是受保护的访问修饰符【修饰符是用来控制方法或属性访问的范围】
  //           可以被本类和子类中使用，不能在类的外部使用
  //  public 可以被本类和子类中使用，也可以在类的外部
  calculateRent() {
    // 方法重写 [override]
    super.calculateRent()  //= Vechile.prototype.calculateRent.call(this)
    console.log("Car:", Car.count)
    console.log("this.brand:", this.brand)
    return this.days * this.getPriceByType();
  }

  checkIsWeigui(isOverWeight: boolean) {
    if (isOverWeight) {
      this.total = this.total + 500;
    }
  }

}



let car = new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版");
console.log(car.calculateRent());


class Bus extends Vechile {
  seatNum: number // 座位数
  constructor(
    brand_: string,
    vechileNo_: string,
    days_: number,
    deposit_: number,
    seatNum_: number
  ) {
    super(brand_, vechileNo_, days_, deposit_)
    this.seatNum = seatNum_

    if (this.seatNum > 200) {
      throw new Error("座位数不能超过200");
    }
  }
  // 计算租赁价格
  getPriceBySeatNum() { 
    let rentMoneyByDay: number = 0;//每天的租金
    if (this.seatNum <= 16) {
      rentMoneyByDay = 800;
    } else if (this.seatNum > 16) {
      rentMoneyByDay = 1600;
    }
    return rentMoneyByDay;
  }


  calculateRent() {

    super.calculateRent();
    return this.days * this.getPriceBySeatNum();
  }

  checkIsOverNum(isOverWeight: boolean) {
    if (isOverWeight) {
      this.total = this.total + 2000;
    }
  }
}






export { }