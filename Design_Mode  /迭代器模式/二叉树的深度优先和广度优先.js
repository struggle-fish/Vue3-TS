function Node(key) {
	this.children = []
	this.key = key
}

const na = new Node('A')
const nb = new Node('B')
const nc = new Node('C')
const nd = new Node('D')
const ne = new Node('E')
const nf = new Node('F')

na.children.push(nb)
na.children.push(nc)
nb.children.push(nd)
nb.children.push(ne)
nc.children.push(nf)
console.log(JSON.stringify(na))
/*
const test = {
	"children": [
		{
			"children": [
				{
					"children": [],
					"key": "D"
				},
				{
					"children": [],
					"key": "E"
				}
			],
			"key": "B"
		},
		{
			"children": [
				{
					"children": [],
					"key": "F"
				}
			],
			"key": "C"
		}
	],
	"key": "A"
}
*/

// unshift 往开头添加
// shift  从开头删除第一个元素
// function dfs(node) {
// 	const stack = [node]
// 	while (stack.length > 0) {
// 		// 出栈
// 		const first = stack.shift()
// 		// 输出结果 A B D E C F
// 		console.log(first.key)
// 		// 将子节点压栈
// 		first.children
// 			.slice()
// 			.reverse()
// 			.forEach(child => stack.unshift(child)) // 入栈
// 	}
// }
//
// dfs(na)


function dfs(node) {
	console.log(node.key)
	node.children.forEach(dfs)
}

dfs(na)



function bfs(node) {
	const queue = [node]
	while(queue.length > 0) {
		// 出队
		const first = queue.shift()
		// A B C D E F
		console.log(first.key)
		// 将子节点入队
		first.children
				 .forEach(child => queue.push(child))
	}
}

bfs(na)















