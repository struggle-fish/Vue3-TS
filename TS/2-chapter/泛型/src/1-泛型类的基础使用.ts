// 为什么要用泛型类【 好处】
// 好处1：编译期对类上调用方法或属性时的泛型类型进行安全检查(类型安全检查)，不符合泛型实际参数类型(泛型实参类型) 就编译通不过，防止不符合条件的数据增加进来。

// 好处2：一种泛型类型被具体化成某种数据类型后，该数据类型的变量获取属性和方法时会有自动提示，这无疑提高代码开发效率和减少出错率。	



// 泛型一种参数化数据类型，具有以下特点的数据类型叫泛型 
/*

特点一：定义时不明确使用时必须明确成某种具体数据类型的数据类型。【泛型的宽泛】

特点二：编译期间进行数据类型安全检查的数据类型。【泛型的严谨】

TODO 特别注意: 

1. 类型安全检查发生在编译期间    
2. 泛型是参数化的数据类型， 使用时明确化后的数据类型就是参数的值

泛型形参类型一般有两种表示: 
1. A-Z 任何一个字母 
2. 语义化的单词来表示，
绝大多数情况，泛型都是采用第一种形式表示，如下:	
class 类名<泛型形参类型>

class ArrayList<T>{  
      array: Array<T>
      add(data:T){
          ....
      }
  ....
}

*/


// 泛型的any化
// 泛型的默认值的问题 
// TODO 泛型是 参数化的数据类型
class ArrayList<T = {}> { // TODO 泛型T 默认是 {} 类型
  //第一步：定义一个引用属性【数组】
  public element: Array<T>
  constructor() {

    this.element = [];
  }
  public index: number = 0;
  // 往数组中添加元素
  public add(ele: T) {
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
  get(index: number): T {

    return this.element[index];

  }

  // 第三步: 显示方法
  show() {
    this.element.forEach((ele) => {
      console.log(ele);
    })
  }
  // 课后作业:
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
type stuType = { stuname: string, age: number, address: string }
let stuOne: stuType = { stuname: "wnagwu", age: 23, address: "beijing" }
let stuTwo: stuType = { stuname: "lisi", age: 39, address: "shanghai" }
let stuThree: stuType = { stuname: "liuqi", age: 31, address: "nanjing" }

//let arrayList = new ArrayList([stuOne, stuTwo, stuThree]);
let arrayList = new ArrayList();
arrayList.add({ "username": "wangwu", "age": 23 })

console.log(arrayList.get(0));

let arrayList2 = new ArrayList();
arrayList2.add(3)
arrayList2.add('HHH')


//let arrayList3 = new ArrayList<typeof stuOne>();
let arrayList3 = new ArrayList<stuType>();
arrayList3.add(stuOne)
arrayList3.add(stuTwo)
arrayList3.add(stuThree)

let stuobj = arrayList3.get(1)
console.log(stuobj.stuname);


// 泛型如果在使用时没有具体化的类型,那么就会默认为unknown数据类型
let arrayList5 = new ArrayList();

arrayList5.add(3);
arrayList5.add("abc");
arrayList5.add(stuOne);
//arrayList5.get(0).
let stuObj2 = arrayList5.get(2);
//stuObj2.stuname//类型“unknown”上不存在属性“stuname”。
export { }













