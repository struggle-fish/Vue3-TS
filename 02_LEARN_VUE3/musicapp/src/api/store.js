import { provide } from 'vue'
import Axios from "axios";


const AxiosSymbol = window.Symbol()

// TODO：这里怎么优化下，先放着
const axios = Axios.create({
	baseURL: 'http://localhost:3003'
})

// 响应拦截
axios.interceptors.response.use(
	(res) => {
		console.log('这个是什么呀---', res.data)
		return res.data
	}
)

function useConfigure () {
	provide(AxiosSymbol, axios)
}

export {
	useConfigure,
	AxiosSymbol
}
