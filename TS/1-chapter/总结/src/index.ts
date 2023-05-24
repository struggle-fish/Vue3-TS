// 学习 TS 就是学习 TS中的类型

/*

	TS 中的基础类型
		string number boolean null undefined void

		数组 元祖  枚举（常量枚举，普通枚举）

		never 表示这个东西永远都不会到达，所有类型的子类型（底端类型）  如果这个值不需要了，可以将这个属性重置成 never

		any 顶端类型  最大的类型

		object 非原始类型  对象 函数 数组

		bigInt symbol 类型

		包装类型：String Number ..
		
		
		字面量类型： 具体的值当做类型

		联合类型（并集 |） 有一个满足就行

		交叉类型（交叉的结果是子类型 &）都要  你有的我也有  没有赋值之前，默认只能调用公共方法


		断言  可以将某个类型直接断言成一个已经存在的类型 （双重断言，非空断言）

		函数类型：参数签名  返回值签名

		函数的默认特性：剩余参数 默认值   可选择参数  this的问题
		函数重载 function  伪重载 只是对类型的重载
		输入和输出 存在着某种关联就可以考虑使用重载，参数的个数不一致导致实现的逻辑也不一致



		keyof 索引类型查询
		typeof 类型查询

		类：修饰符 private protected public readonly
		如果在类上使用实例属性，需要先声明

		方法： 原型方法 和 实例方法




		type（主要用于 | & 别名，条件类型） interface(描述形状  extends implements) 抽象的

		接口：
		可选属性
		readonly
		任意属性[key: string]: any

		可索引属性[key: number]: any
		
		接口的 extends implements

		接口的类型也可以通过 [] 获取索引访问


		泛型
		类似于函数的参数  （占位置），等会儿使用的时候传递类型，对于占坑的变量来说不会发生变化

		泛型默认值  泛型约束（可以约束传递的类型，和条件类型连用的情况比较多）


		条件类型：T extends 条件 ? 成立 ： 不成立

		谁是谁的父   类型的层级  never < 字面量 < 基础类型 < 包装类型 < Object < any / unknown

		条件类型如果传入的是泛型的联合类型，（分发问题）

		分发具有两面性：
			不好的时候需要禁用类型分发

			禁用分发：T & {}

			内置条件类型：基于分发实现的  exclude  extract 





		

		



























	





	
*/





























export {}



















