"use strict";
// 自执行函数
var __extends = (this && this.__extends) || (function () {
  // d : Son  b: Parent
    var extendStatics = function (Son, Parent) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (Son, Parent) {
              Son.__proto__ = Parent;
            }) ||
            function (Son, Parent) {
              for (var p in Parent) {
                if (Object.prototype.hasOwnProperty.call(Parent, p))  {
                  Son[p] = Parent[p];
                }
              } 
            };
        return extendStatics(Son, Parent);
    };


    return function (Son, Parent) {
        if (typeof Parent !== "function" && Parent !== null) {
          throw new TypeError("Class extends value " + String(Parent) + " is not a constructor or null");
        }
        // 先继承静态方法
        extendStatics(Son, Parent);
        // middle 函数，在继承原型方法
        function __() {
          this.constructor = Son;
        }
        // TODO 这个不是原型覆盖吗，因为先继承后挂在方法 1-1处
        Son.prototype = Parent === null ? Object.create(Parent) : (__.prototype = Parent.prototype, new __());
    };
})();


// 父类：Vechile   交通工具。
var Vechile = /** @class */  (function () {
    function Vechile(brand_, vechileNo_, days_, deposit_) {
        this.days = 1; // 租赁天数
        this.total = 0; // 支付的租赁总费用
        this.deposit = 0; // 押金
        this.brand = brand_;
        this.vechileNo = vechileNo_;
        this.days = days_;
        this.deposit = deposit_;
        console.log("constructor Vechile=>this.brand:", this.brand);
    }
    // 计算租赁车的价格 ( calculateRent)
    Vechile.prototype.calculateRent = function () {
        console.log("calculateRent来自Vechile=>this.brand:", this.brand);
        console.log(this.brand + " 车牌号为:" + this.vechileNo + "开始被租");
        return 0;
    };
    //支付押金的方法( payDesposit)
    Vechile.prototype.payDesposit = function () {
        console.log(this.brand + " 车牌号为:" + this.vechileNo + " 支付了:" + this.deposit);
    };
    //  安全检测方法（safeShow)
    Vechile.prototype.safeShow = function () {
        console.log("车规则....");
        console.log(this.brand + " 车牌号为:" + this.vechileNo + " 违规了:");
    };
    Vechile.count = 3;
    return Vechile;
}());

var Car = /** @class */ (function (_super) {
    // TODO 1-1 先发成继承，在往子类原型上挂在方法
    __extends(Car, _super);

    function Car(brand_, vechileNo_, days_, deposit_, type_) {
        var _this = _super.call(this, brand_, vechileNo_, days_, deposit_) || this;
        _this.type = type_;
        return _this;
    }
    // 根据车的型号来获取租用一天该型号车的租金
    Car.prototype.getPriceByType = function () {
        var rentMoneyByDay = 0; //每天的租金
        if (this.type === "普拉多巡洋舰") {
            rentMoneyByDay = 800;
        }
        else if (this.type === "凯美瑞旗舰版") {
            rentMoneyByDay = 400;
        }
        else if (this.type === "威驰智行版") {
            rentMoneyByDay = 200;
        }
        return rentMoneyByDay;
    };
    // private 是私有的访问修饰符 只允许在本类中方法
    // protected 是受保护的访问修饰符【修饰符是用来控制方法或属性访问的范围】
    // 可以被本类和子类中使用，不能在类的外部使用
    //  public // 可以被本类和子类中使用，也可以在类的外部
    Car.prototype.calculateRent = function () {
        // 方法重写 [override]
        _super.prototype.calculateRent.call(this); //= Vechile.prototype.calculateRent.call(this)
        console.log("Car:", Car.count);
        console.log("this.brand:", this.brand);
        return this.days * this.getPriceByType();
    };
    return Car;
}(Vechile));
var car = new Car("普拉多", "京3A556", 3, 100000, "凯美瑞旗舰版");
console.log(car.calculateRent());
