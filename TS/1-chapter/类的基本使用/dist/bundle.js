(function () {
	'use strict';

	// 学习 TS 就是学习 TS中的类型
	/*




	*/
	// 声明一个变量没有给类型的时候，默认类型就是 any
	// 联合类型 是并集还是交集呢？ 是并集  约等于 ||
	// 并集意味着 全部的意思
	// 交集意味着  两个共有的
	// 非空断言
	let ele = document.getElementById('root');
	ele.style.background = 'red'; // 我断定这个元素就是存在的，一定有值
	// ?.  js 语法，叫链判断运算符，这个值没有就不取值了
	// ! 意味着 这个值存在，ts 语法
	// ?? || && 都是 js语法
	let r1 = 'a'; // a
	console.log(r1, '---r1');
	let r2 = 'b';
	console.log(r2, '---r2');
	let r3 = 0 ; // 0 也是 false 但是可以返回
	console.log(r3, '---r3');

})();
//# sourceMappingURL=bundle.js.map
