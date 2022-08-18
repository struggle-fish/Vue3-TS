import axios from "axios";
import qs from "qs";

// 声明一个存放请求以及和这个请求对应的取消函数，他们的关系是一一对应的
// 请求池
const pendingMap = new Map()

/**
 * 生成唯一的每个请求的唯一key
 * @param {*} config
 * @returns
 */
const getReqKey = (config) => {
	// 请求方式、请求地址、请求参数生成的字符串来作为是否重复请求的依据
	const { method, url,params, data } = config;
	// GET ---> params  POST ---> data
	const requestKey = [method, url, qs.stringify(params), qs.stringify(data)].join('&');
	return requestKey
}



const removeReqKey = (pendingKey) => {
	if (pendingMap.has(pendingKey)) {
		const cancelToken = pendingMap.get(pendingKey);
		// 取消之前发送的请求
		cancelToken(pendingKey);
		// 请求对象中删除 requestKey
		pendingMap.delete(pendingKey);
	}
}



// 生成一个函数
export const myAxios = (axiosConfig = {}, customOptions = {}) =>{

	const CancelToken = axios.CancelToken;

	const instance = axios.create({
		baseURL: '/',
		timeout: 100000,
		withCredentials: true,
		headers: {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/json;charset=UTF-8',
		},
	})



	// 自定义配置
	let custom_options = Object.assign({
		repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
	}, customOptions);

	console.log(custom_options, 'custom_options')


	instance.interceptors.request.use(
		config => {

			// 获取请求key
			let requestKey = getReqKey(config);

			// 判断是否是重复请求
			if (pendingMap.has(requestKey)) { // 是重复请求
				removeReqKey(requestKey); // 取消
			}else{
				// 设置cancelToken
				config.cancelToken = new CancelToken(function executor(cancel) {
					pendingMap.set(requestKey, cancel); // 设置
				})
			}


			return config;
		},
		error => {
			console.log(error, '报错了吗--12321321')
			// 请求错误处理
			return Promise.reject(error);
		}
	);

	// 返回拦截
	instance.interceptors.response.use((response) => {

		// 请求对象中删除requestKey
		let requestKey = getReqKey(response.config);
		removeReqKey(requestKey);

		// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
		// 否则的话抛出错误
		if (response.status === 200) {
			if (response.data && (response.data.code === 0
				|| response.data.code === 200)){
				console.log(response.data, 'response.data')
				return Promise.resolve(response.data);
			}

			console.log(response, 'returncode-非0返回')
			return Promise.reject(response.data);
		}

		console.log(response, 'status非200返回')
		return Promise.reject(response.data);
	}, (error) => {

		console.log(error, '什么鬼-1')

		// 请求对象中删除requestKey
		if (error.config) {
			const requestKey = getReqKey(error.config);
			removeReqKey(requestKey);
		} else {
			removeReqKey(error.message);
		}

		return Promise.reject({
			...error,
			code: -1,
			message: '网络异常，请稍后再试'
		});
	})

	return instance.request(axiosConfig)
}


