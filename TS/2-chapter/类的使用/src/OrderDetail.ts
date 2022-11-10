export default class OrderDetail {
  orderDetailId: number = 0
  productname: string = '没有'
  price: number
  // TS4之前针对
  // 没有初始化的值，也没有在构造函数中明确给这个赋值的一种解决方案
  // 增加 undefined 类型就可以
  // count: number | undefined // TS4之前针对

  // 注意这个 定义了一个属性，但是构造函数里没有赋值，getTotal又用到了，使用！
  count!: number 

  constructor(
    orderDetailId: number,
    productname: string,
    price: number,
    // count: number
  ) {
    this.orderDetailId = orderDetailId
    this.productname = productname
    this.price = price
    // this.count = count

  }

  getTotal() {
    return this.price * this.count
  }
}

let orderDetail = new OrderDetail(12, "cc", 30);
console.log(orderDetail.getTotal(), '哈哈哈');//NaN

console.log(typeof orderDetail.count, 'jhahha')//undefined