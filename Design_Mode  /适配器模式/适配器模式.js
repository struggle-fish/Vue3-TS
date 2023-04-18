// 适配器模式


/*





*/


// 电源类
class Power {
	charge() {
		return '220v'
	}
}

class Adaptor {
	constructor() {
		this.power = new Power()
	}

	charge() {
		let v = this.power.charge()
		return `${v}=>12v`
	}

}


class NotePad {
	constructor() {
		this.adaptor = new Adaptor()
	}

	use() {
		console.log(this.adaptor.charge())
	}
}



let client = new NotePad()
client.use()


// 应用场景
// 适配参数
function ajax(options) {
	let defaultOptions = {
		method: 'GET',
		dataType: 'json'
	}
	// 默认参数适配
	for (let attr in options) {
		defaultOptions[attr] = options[attr] || defaultOptions[attr]
	}
}

function transform(str) {
	return JSON.parse(str)
}

ajax({
	url: 'xxxxx',
	method: 'POST',
	success(str) {
		// 服务器返回的是 字符串
		let result = transform(str)
		console.log(result)
	}
})









































