// 详细讲解+透彻总结 any 为什么不能替代类上的泛型？
/*
原因一：编译期间 any 无法进行类型安全检查，而泛型在编译期间可以进行类型安全检查

any 是所有类型的父类，也是所有类型的子类如果我们现在是一个宠物店类，
希望只能添加 Dog 类，当调用 add 方法添加 Customer、Student 类必定出现编译错误，
从而保证了类型安全检查，但是 any 类型无法保证类型安全检查，可以为任意类型，
包括 string，number，boolean，null，undefined，never，void，unknown 
基础数据类型和数组，类，接口类型， type 类型的变量全部能接受，
不会进行无法进行类型安全检查。


原因二：any 类型可以获取任意数据类型的任何属性和任意方法而不会出现编译错误导致潜在错误风险，
而泛型却有效的避免了此类问题发生

any 类型可以获取任何属性和任意方法而不会出现编译错误，因为any可以代表任意数据类型来获取任意属性和任意方法，
但是泛型类型被具体化成某种数据类型后，该数据类型的变量调用该数据类型之外的属性和方法时，
出现编译错误，这也减少了代码隐藏潜在错误的风险



原因三: any 类型数据获取属性和方法时无自动提示，泛型有自动提示


**彩蛋**：any 类型可以代表任意数据类型来获取任何属性和任意方法而不会出现编译错误，
因为any可以代表任意数据类型来获取任意属性和任意方法：
【 any 的这个特性是一把双刃剑，当我们需要这么使用，它给我们带来方便，
但是大多数情况下我们是不需要这么做的】。


*/



// TODO any的特性，任意数据类型

class ArrayList {
  //第一步：定义一个引用属性【数组】
  public element: Array<any>
  constructor() {

    this.element = [];
  }
  public index: number = 0;
  // 往数组中添加元素
  public add(ele: any) {
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
  get(index: number): any {

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
  constructor(public custname: string, public age: number) { }
}

let wangwuCust = new Customer("wangwu", 23);//new Object object


let lisiCust = new Customer("lisi", 23);
let custArrayList = new ArrayList();
custArrayList.add(wangwuCust)
custArrayList.add(lisiCust)
custArrayList.add(3);
custArrayList.add(true)

let cust = custArrayList.get(0)
console.log(cust.custname);
console.log(cust.custnmae);
cust.buy();





// ts-node 5any和泛型1.ts


export { }


 












