import OrderDetail from './OrderDetail'

class Order {
  //订单 Id，订单日期，顾客地址，顾客名，顾客微信，顾客手机号，客服
  // public orderId: number | undefined
  // public date: Date | undefined
  // public custname: string | undefined
  // public phone: string | undefined

  // // 定义了一个Array数组,Array数组当中的每一个元素都是OrderDetail类型的元素
  // public orderDetailArray: OrderDetail[] = []


  // 给构造器的参数如果加上public,这个参数就变成了一个属性,
  //  这种简洁写法是两步综合体： 
  //  第一步：定义了一个属性，
  //  第二步：等于默认构造函数会给这个属性赋值[隐式操作]
  constructor(
    public orderId: number, // 这个等于定义加赋值
    public date: Date,
    public custname: string,
    public phone: string,
    public orderDetailArray: Array<OrderDetail>)
    {
      // this.orderId = orderId
      // this.date = date
      // this.custname = custname
      // this.phone = phone
      // this.orderDetailArray = orderDetailArray
    }

}

let orderDetailOne = new OrderDetail(10, "电视机", 5000, 3);
let orderDetailTwo = new OrderDetail(11, "桌子", 2000, 2);

var orderDate = new Date(2023, 10, 17, 5, 20, 0);
let order = new Order(1, orderDate, "李武", "33333",
  [orderDetailOne, orderDetailTwo]);

  console.log(order);





