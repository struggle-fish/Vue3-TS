import {
	toRefs,
	reactive,
} from 'vue'

export default (promise, manual = false) => {
	console.log('这个是什么111-useAsyncState')
	const state = reactive({
		data: {},
		error: false,
		loading: false,
	})
	const execute = async () => {
		state.error = false
		state.loading = true
		try {
			console.log('哈哈哈--111', manual)
			const resp = await promise
			console.log(resp, 'use-axios数据-2')
			state.data = resp
		} catch (error) {
			console.log(error, '错误是什么呢-134234')
			state.error = error
		}
		state.loading = false
	}
	execute()
	// onMounted(() => {
	// 	console.log('执行了吗')
	// 	// 第一次是否需要手动调用
	// 	!manual && execute()
	// })
	return {
		execute,
		...toRefs(state)
	}
}


/*export default (options = {}) => {
	const {
		url,
		manual = false,
		params = {}
	} = options

	const state = reactive({
		data: {},
		error: false,
		loading: false,
	})
	const execute = async () => {
		// 拼接查询参数
		let query = ''
		Object.keys(params).forEach(key => {
			const val = params[key]
			const value = isRef(val) ? val.value : val
			query +=`${key}=${value}&`
		})
		state.error = false
		state.loading = true
		try {
			const resp = await fetch(`${url}?${query}`)
				.then(res => res.json())
			console.log(resp, 'use-axios数据-2')
			state.data = resp
		} catch (error) {
			state.error = true
		}
		state.loading = false
	}
	onMounted(() => {
		// 第一次是否需要手动调用
		!manual && execute()
	})
	return {
		execute,
		...toRefs(state)
	}
}*/

