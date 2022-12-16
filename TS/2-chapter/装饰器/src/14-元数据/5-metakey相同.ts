import 'reflect-metadata'
// 为类定义元数据
@Reflect.metadata('decribe', '都是地球人')
class People {
  username = "wangwu"

  eat() {

  }
}

@Reflect.metadata('decribe', '木星和太阳')
class Customer {
  username = "wangwu"
  eat() {

  }
}

// TODO: 根据指定的对象获取的元数据，不会被覆盖
// 获取元数据
console.log(Reflect.getMetadata('decribe', Customer));// 木星和太阳

export { }