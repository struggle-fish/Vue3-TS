// 一个字符串索引签名


interface SquareConfig {
	color?: string
	width?: number
	
	// 这个就表示除去以上两个之外的其他的任何属性, 扩展灵活
	[propName: string]: any
}


let circle: SquareConfig = {
	color: '红色',
	
	radius: '40度'
}



export {}





