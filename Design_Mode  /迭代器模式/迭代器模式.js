/*

迭代器模式 用于顺序的访问聚合对象内部的元素，又无需知道内部结构。
使用迭代器之后，使用者不需要关心对象的内部结构，就可以按序访问每个元素




*/

// 一个数组的迭代器
function createIterator (array) {
	let index = 0
	console.log('数组的迭代----')

	return {
		next() {
			return index < array.length ? { value: array[index++], done: false } : { value: undefined , done: true}
		}
	}
}


let array = [1, 2, 3]
let it = createIterator(array)
console.log(it.next()) // { value:1,  done: false }
console.log(it.next()) // { value:2,  done: false }
console.log(it.next()) // { value:3,  done: false }
console.log(it.next()) // { value:undefined,  done: true }

// ===========================================================================================

// 数组的 forEach 方法
Array.prototype.forEach = function (callback) {
	console.log('执行-forEach')
	for (let i = 0; i < this.length; i++) {
		callback.call(this, this[i], i, this)
	}
}

let array2 = [11, 22, 33]
array2.forEach((item, index, arr) => {
	console.log(item, index, arr)
})



// ===========================================================================================

// ES6 Iterator
/*
	在ES6中有序集合数据类型有  Array Map Set String TypedArray arguments NodeList
	我们需要一个统一的遍历接口来遍历所有的数据类型
	他们都有[Symbol.Iterator]属性，属性是一个函数，执行函数睡返回迭代器
	迭代器就有next 方法顺序返回子元素




*/

Array.prototype[Symbol.iterator] = function () {
	let index = 0
	return {
		next : () => {
			return index < this.length ? { value: this[index++], done: false } : { value: undefined, done: true }
		}
	}
}
let arr = [2, 3, 4]
let it2 = arr[Symbol.iterator]()

console.log(it2.next()) // { value: 2, done: false }
console.log(it2.next()) // { value: 3, done: false }
console.log(it2.next()) // { value: 4, done: false }
console.log(it2.next()) // { value: undefined, done: true }


// ===========================================================================================
// yield
console.log('yield---------------------------')
let gen = function *() {
	yield 1
	yield* [2,3]
	yield 4
}
let it4 = gen()
console.log(it4.next())
console.log(it4.next())
console.log(it4.next())
console.log(it4.next())
console.log(it4.next())


// ===========================================================================================
// 二叉树的遍历
/*

	二叉树是每个结点最多有两个子树的的树结构，通常子树被称作左子树和右子树
	根据根节点的顺序可以把遍历分为3种  前序  中序  后序

	先序遍历：根节点 -> 左子树 ->  右子树
	中序遍历：左子树 -> 根节点 ->  右子树
	后序遍历：左子树 -> 右子树 ->  根节点


*/

class Tree {
	constructor(left, value, right) {
		this.left = left
		this.value = value
		this.right = right
	}
}

function make(array) {
	if (array.length == 1) {
		return new Tree(null, array[0], null)
	}
	return new Tree(make(array[0]), array[1], make(array[2]))
}

let tree = make([[['D'], 'B', ['E']] ,'A' , [['F'], 'C', ['G']] ])
console.log(tree)
// 前序遍历
function* leftOrder(tree) {
	if(tree) {
		yield tree.value
		yield* leftOrder(tree.left)
		yield* leftOrder(tree.right)
	}
}

function* inOrder(tree) {
	if(tree) {
		yield* inOrder(tree.left)
		yield tree.value
		yield* inOrder(tree.right)
	}
}

function* rightOrder(tree) {
	if(tree) {
		yield* rightOrder(tree.left)
		yield* rightOrder(tree.right)
		yield tree.value
	}
}



let result = []
for (let node of leftOrder(tree)) {
	result.push(node)
}
console.log(result)
	/*
	[

	'A', 'B', 'D',
		'E', 'C', 'F',
		'G'
	]
*/
































































