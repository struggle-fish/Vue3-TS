// 学习 TS 就是学习 TS中的类型

/*
	模块 ES6 module
	模块的特点  如果你在当前文件夹下 写了 import export 这个时候就会产生一个独立的作用域

	在 ts 中除了 import 和 export 之外 还有一个 兼容 commonjs 规范  amd规范

	es6 中的模块语法，ts中都可以使用

	同名的命名空间会自动合并
*/

// =====================================================================================================
// import a from './module/a'

// 内部模块 命名空间  namespace => 自执行函数
// 命名空间中的 方法或者变量，都需要导出才能使用
export namespace Zoo {
	export class Dog {}
}

export namespace Home {
	export class Dog {}
}


Zoo.Dog

Home.Dog




// =====================================================================================================

export namespace Earth {
	export namespace Country {
		export class China {}
		export class America {}
	}
}

// =====================================================================================================



































export {}



















