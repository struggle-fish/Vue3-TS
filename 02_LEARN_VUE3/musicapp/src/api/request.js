import qs from "qs";
import {myAxios} from "@/api/myAxios";
import useAsyncState from "@/api/useAsyncState";


const request = {
	packageAppId(params = {}) {
		params._appId = params?._appId ?? 'h5'
		return params
	},

	get(url, params = {}, customOptions = {}) {
		console.log(params, 'params111')
		const config = {
			method: 'get',
			url,
			params: this.packageAppId(params)
		}
		return useAsyncState(myAxios(config, customOptions))
	},

	post(url, params = {}, customOptions = {}) {
		const config ={
			method: 'post',
			url,
			data: this.packageAppId(params),
		}
		return myAxios(config, customOptions)
	},

	postForm(url, params = {}, customOptions = {}) {
		const config = {
			method: 'post',
			url,
			data: qs.stringify(this.packageAppId(params)),
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}
		return myAxios(config, customOptions)
	},
}

export default request

