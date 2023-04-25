// 组合模式
/*

又称作  整体 - 部分模式

将对象组合成树型结构以表示部分-整体的层次结构

客户可以使用统一的方式对待组合对象和叶子对象






*/
// 虚拟DOM 树形结构

// ReactDOM.render(<span>hello<span>world</span></span>, document.querySelector('#root'))

// ReactDOM.createElement('span', null, 'hello', ReactDOM.createElement('span', null, 'world'))

class ReactElement {
	constructor(type, props) {
		this.type = type
		this.props = props
	}
}

function createElement (type, props = {}, ...children) {
	// console.log(children, '是什么呢')
	// ...children 会 => ['hello', ReactElement]
	return new ReactElement(
		type,
		{
			...props,
			children: children.length == 1 ? children[0] : children
		},
	)
}

function render(element, container) {

	if (typeof element === 'string') {
		return container.appendChild(document.createTextNode(element))
	}

	let {
		type,
		props
	} = element
	let domElement = document.createElement(type) // 创建真是的DOM
	// 循环对象
	for (let attr in props) {
		if (attr === 'children') {
			// children 可能是对象 字符串 数组
			if (typeof props[attr] == 'object') {
				props[attr].forEach(item => {
					if (typeof item === 'object') {
						render(item, domElement)
					} else {
						domElement.appendChild(document.createTextNode(item))
					}
				})
			} else {
				domElement.appendChild(document.createTextNode(props[attr]))
			}
		}
		else if (attr === 'className') {
			domElement.setAttribute('class', props[attr])
		} else {
			domElement.setAttribute(attr, props[attr]) // id name placeholder
		}
	}
	container.appendChild(domElement)
}

let rootElment = createElement('span', { 'className': '哈哈' }, 'hello', createElement('span', null, 'world'))
console.log(JSON.stringify(rootElment), 'rootElment')
render(rootElment, document.querySelector('#root'))
/*
{
	"type": "span",
	"props": {
		"children":[
			"hello",
			{
				"type":"span",
				"props": {
					"children":"world"
				}
			}
		]
	}
}
*/









