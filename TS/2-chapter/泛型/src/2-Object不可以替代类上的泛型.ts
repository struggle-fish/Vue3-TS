// object  为什么不能替代类上的泛型？

/*
原因一：编译期间 object 无法进行类型安全检查，而泛型在编译期间可以进行类型安全检查

object 接受也只能接受所有的 object 类型的变量，
比如有 Customer、Student、Dog 类的实例都是对象类型，或者自己定义的对象，
都可以传递给 object 类型的方法参数或属性，
但如果我们只希望添加Customer类的对象，当添加其他类的对象必须出现编译错误，
但是 object 无法做到，就只能用泛型了。


原因二: 
object 类型数据无法接受非 object 类型的变量，只能接受 object 类型的变量，
泛型能轻松做到

正因为 object 接受也只能接受所有的 object 类型的变量，
那么如果有一个集合类[数组封装类]有一个 add 方法，
允许每次添加指定类型的变量到 add 方法的参数，
比如：我们第一轮的希望添加 10 次字符串类型的变量，
第二轮的希望添加 10 次整数类型变量，
第三轮的希望添加 10 次顾客类型的变量，泛型轻松做到。
object 类型数据无法接受任意非 object 类型的变量，
object 只能接受所有的 object 类型的变量。



原因三: object 类型数据获取属性和方法时无自动提示，泛型有自动提示
一种泛型类型被具体化成某种数据类型后，该数据类型的变量获取属性和方法时会有自动提示，
提高代码开发效率和减少出错率，但在 object 类型的变量无法获取数据类型的属性和方法，
降低了体验感和开发效率。


*/




class ArrayList<T = any> {
  //第一步：定义一个引用属性【数组】
  public element: Array<object> // TODO 这里 如果写 object 就会有问题
  constructor() {

    this.element = [];
  }
  public index: number = 0;
  // 往数组中添加元素
  public add(ele: object) {  // TODO 这里 如果写 object 就会有问题
    //console.log("this.kk * 3:", this.kk * 3);
    this.checkIndex();
    this.element[this.index++] = ele;
  }
  public checkIndex() {
    if (this.index < 0) {
      throw new Error("数组下标不能为零");
    }
  }
  // 第二步：根据索引来查询数组中指定元素
  get(index: number): object {

    return this.element[index];

  }

  // 第三步: 显示方法
  show() {
    this.element.forEach((ele) => {
      console.log(ele);
    })
  }

  remove(value: number): number
  remove(value: object): object
  //remove(value: number | object): number | object {
  remove(value: any): any {
    this.element = this.element.filter((ele, index) => {
      //如果是根据数字【元素索引】去删除元素，remove方法返回的是一个数字
      if (typeof value === "number") {
        return value !== index
      } else {
        // 如果是根据对象去删除元素，remove方法返回的是一个对象
        return value !== ele
      }
    })
    return value;
  }

}
//object Object unknown any
type stuType = { stuname: string, age: number, address: string }
let stuOne: stuType = { stuname: "wnagwu", age: 23, address: "beijing" }
let stuTwo: stuType = { stuname: "lisi", age: 39, address: "shanghai" }
let stuThree: stuType = { stuname: "liuqi", age: 31, address: "nanjing" }

class Customer {
  constructor(public name: string, public age: number) { }
}
//Object 
let obj: object = new Customer("wangwu", 23);
let wangwuCust = new Customer("wangwu", 23);//new Object object

let lisiCust = new Customer("lisi", 23);
let custArrayList = new ArrayList<Customer>();
custArrayList.add(wangwuCust)
custArrayList.add(lisiCust)
let cust = custArrayList.get(0);


custArrayList.add(stuOne) // TODO 不可以很好的限制只添加某个对象，现在是只要是对象就可以添加了
custArrayList.add(stuTwo)


// TODO: 内部写死object类型后，外部很不灵活
// let strArrayList = new ArrayList<string>();
// strArrayList.add("df") // 类型“string”的参数不能赋给类型“object”的参数。ts(2345)


custArrayList.show();



export { }


