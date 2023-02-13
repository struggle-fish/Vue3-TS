// TS的核心原则之一，就是对值所具有的结构进行类型检查。
// 他有时被称做 '鸭式辨型法' 或 '结构性子类型化'
// 在TS 里，接口的作用就是为这些类型命名或为你的代码或第三方代码定义契约



// 接口初探


function printLabel(labelledObj: { label: string }) {
	console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// >> ================== 修改一下 ==================

// 好比一个名字，用来描述上面例子里的要求
// 它代表了有一个 label属性且类型为string的对象
interface LabelledValue {
	label: string
}

function printLabel2(labelledObj: LabelledValue) {
	console.log(labelledObj.label)
}

let myObj2 = {
	size: 10,
	label: 'label-1'
}
printLabel2(myObj2)




export {}




























