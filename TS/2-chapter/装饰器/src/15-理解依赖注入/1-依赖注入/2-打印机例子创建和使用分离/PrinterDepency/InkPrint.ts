//  下面是一个说明依赖注入带来的好处的不错的经典案例,没有实现具体功能
//  本讲理解原理即可，后面实战环节会运用依赖注入

//  Java Spring  xml 注解
//  TODO: 注入(inject)外部给内部的属性赋值
//  依赖注入[DI]-- 创建和使用分离,外部给内部的属性赋值
//  TODO: 依赖注入好处: 就是让项目在日后修改或变动时，不修改或者少修改代码
//  大大提高了项目可扩展性
// TODO: 打印机墨盒依赖 纸（Paper）, 外界调用的时候 ，注入纸的类型（A4 A5）
// TODO: 也就是纸不管变成什么样的，墨盒内部都不变（创建和使用分离）
class InkPrint { // 喷墨打印机
  // 多态
  // TODO: 这里只使用，创建不管了，在别地方创建，依赖注入进来
  paper!: Paper // TODO: Pager 是父类类型，可以接收任何子类
  ink!: Ink

  print() {

  }

}
export { }