// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型



// TODO: 理解这个调用签名
// >> 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

interface SearchFunc {
	(source: string, subString: string): boolean
}

// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口

let mySearch: SearchFunc

// 这里函数形参名字，可以不用一样，但是类型得是能对应上的
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
mySearch = function (src: string, sub: string) {
	let result = src.search(sub)
	return result > -1
}

// 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，
// 因为函数直接赋值给了 SearchFunc类型变量。
// 函数的返回值类型是通过其返回值推断出来的（此例是 false和true）。
// 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与 SearchFunc接口中的定义不匹配。


// >> 通过接口定义个有名函数
interface IFnHasName {
	// 定义一个函数名称，并返回一个函数
	iFnName(x: number, y: number): () => number;
}


const hasNameFn: IFnHasName = {
	iFnName: function(x:number, y: number) {
		return () => x + y
	}
}









export {}







