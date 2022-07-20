import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
	state: {
		count: 1,
		list: []
	},
	getters: {
		totalPrice(state) {
			return state.count * 100
		},
		listData(state) {
			return state.list
		}
	},
	// 修改状态 同步
	mutations: {
		setCount(state, num) {
			state.count += num
		},
		setList(state, list) {
			state.list = list
		}
	},
	// 异步请求
	actions: {
		getList({commit}) {
			let api = `https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn`
			axios.get(api).then(res => {
				console.log(res)
				commit('setList', res.data)
			})
		}
	},
	modules: {

	}
})
