// 混合类型
// 接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。
// TODO: 一个对象可以同时做为函数和对象使用，并带有额外的属性
// 好像还是主要作为函数使用

interface Counter {
	(start: number): string
	interval: number
	reset(): void
}

function getCounter(): Counter {
	let counter = <Counter>function (start: number) {}
	counter.interval = 23
	counter.reset = function () {}
	
	return counter
}



export  {}







