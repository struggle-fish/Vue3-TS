// 使用 Mock
var Mock = require('mockjs')

Mock.setup({
	timeout: '200-600'
})


Mock.mock(
	'/user/userinfo',
	'get',
	() => {
		return {
			userName: '江小鱼',
			type: '帅气'
		}
	}
)

