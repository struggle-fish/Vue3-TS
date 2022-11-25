import List from './List';
import LinkedList from './2-LinkedList';

export default class ArrayList<T> implements List<T> {
  array: Array<T>
  index: number = 0

  constructor() {
    this.array = []
  }


  add(ele: T): void {
    this.checkIndex();
    this.array[this.index++] = ele;
  }


  public checkIndex() {
    if (this.index < 0) {
      throw new Error("数组下标不能为零");
    }
  }

  get(index: number): T {
    return this.array[index];
  }
  size(): number {
    return this.index ? this.index : 0
  }

  remove(value: number): number
  remove(value: T): T
  // remove(value: number | object): number | object {
  remove(value: any): any {
    this.array = this.array.filter((ele, index) => {
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

  // 第三步: 显示方法
  show() {
    this.array.forEach((ele) => {
      console.log(ele);
    })
  }
  

}

// 多态体现在： 1.父类对象变量可以接受任何它的子类对象  
//  2. 接口类型对象变量可以接受任何它的实现类的对象
let arrayList: List<string> = new LinkedList<string>();
arrayList.add("王五");
arrayList.add("吴俊泽");
arrayList.add("张海同");
arrayList.add("周陈平");
arrayList.add("陈平");
arrayList.add("霍东阁")
arrayList.add("张洪海")
//arrayList.get(0).length

export {}