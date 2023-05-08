(function () {
	'use strict';

	// 学习 TS 就是学习 TS中的类型
	/*

	    常见的类型：基础类型， 高级类型  自定义类型  ts包中内置了很多类型
	    
	    什么叫类型？ TS 中冒号后面的都是类型标识，等号后面的是值
	    
	    ts 类型是从安全角度出发的，一切从安全角度来出发
	    ts 是在开发时候来检测，不是在运行的时候，所以代码并没有被真正的执行
	    ts 中具备一个类型推导的特点，不是所有的变量都需要增加类型，只有无法推断或者推断错误的时候才需要编写类型
	    ts 最终编译后 类型就消失了（类型就是空气）
	    
	    

	*/
	// let bb = tuple[3]
	// =====================================================
	// ts 中的枚举  自带类型的对象
	// 枚举的值 如果没有赋值，从 0 开始 递增
	var USER_ROLE;
	(function (USER_ROLE) {
	    USER_ROLE[USER_ROLE["USER"] = 0] = "USER";
	    USER_ROLE[USER_ROLE["ADMIN"] = 1] = "ADMIN";
	    USER_ROLE[USER_ROLE["SUPER_ADMIN"] = 2] = "SUPER_ADMIN";
	})(USER_ROLE || (USER_ROLE = {}));
	console.log(USER_ROLE["USER"]);
	console.log(USER_ROLE[0]);
	console.log("A" /* USER_R.USER */); // 	console.log("A" /* USER_R.USER */);

})();
//# sourceMappingURL=bundle.js.map
