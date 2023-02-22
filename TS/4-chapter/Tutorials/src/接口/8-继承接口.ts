// 和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里

// extends -> 接口继承接口
// implements -> 类继承接口
interface  Shape {
	color: string
}

interface Square extends Shape {
	sideLength: number
}

let square = <Square>{}
square.color = '红色'
square.sideLength = 10



// >> 继承多个接口
interface PenStroke {
	penWidth: number
}

interface Square2 extends Square, PenStroke {
	sideLength: number
}

let square2 = <Square2>{}
square2.color = '红色'
square2.sideLength = 10
square2.penWidth = 10


export {}







