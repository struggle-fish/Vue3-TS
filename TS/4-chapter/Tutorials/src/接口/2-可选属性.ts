// ? 可选属性


// 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
interface SquareConfig {
	color?: string
	width?: number
}

function createSquare(config: SquareConfig): { color: string, area: number } {
	let newSquare = {
		color: 'white',
		area: 100
	}
	
	if (config.color) {
		newSquare.color = config.color
	}
	
	// 好处2：未解析的变量 col
	// if (config.col) {
	// 	newSquare.color = config.col
	// }
	
	if (config.width) {
		newSquare.area = config.width * config.width
	}
	return newSquare
}

let mySquare = createSquare({
	color: 'yellow'
})


// 可选属性的好处之一是可以对可能存在的属性进行预定义
// 好处之二是可以捕获引用了不存在的属性时的错误。




export {}











