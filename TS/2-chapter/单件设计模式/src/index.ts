// 一个类对外有且仅有一个实例【只提供一个实例】这种编码方案就是单件设计模式

// 构建单件设计模式
//   第一步：把构造器设置为私有的，不允许外部来创建类的实例【对象】
//   第二步: 至少应该提供一个外部访问的方法或属性，外部可以通过这个方法或属性来得到一个对象
//           所以应该把这个方法设置为静态方法
//   第三步：外部调用第二步提供的静态方法来获取一个对象


class MyLocalStorage {

   // 静态属性和对象属性[实例属性】是类中两大成员
  static localstorage: MyLocalStorage // 静态引用属性

  constructor() {
    console.log("这是TS的单件设计模式的静态方法的构造器");
  }


  // 提供一个外部访问的方法,
  // 通过这个方法用来提供外部得到一个对象的方法
  public static getInstance() {
    //   1. 带static关键字的方法就是一个静态方法
    //   2. 静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性，
    //   3. 外部可以通过类名来调用
    //   静态方法不可以访问实例属性或实例方法【对象属性或对象方法】，但是可以访问静态方法和属性
    if (!this.localstorage) {
      console.log("我是一个undefined的静态属性，用来指向一个对象空间的静态属性")
      this.localstorage = new MyLocalStorage()
    }
    return this.localstorage
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {

    let value = localStorage.getItem(key)
    return value != null ? JSON.parse(value) : null;

  }
}




