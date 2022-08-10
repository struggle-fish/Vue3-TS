import useAxios from './myaxios'
import axios from "axios";
let baseUrl = 'http://localhost:3003'

// 获取轮播图的api,type:资源类型,对应以下类型,默认为 0 即PC
// 1: android; 2: iphone;3: ipad
export function getBanner(type = 2){
	return useAxios({
		method: 'get',
		url: `/banner?type=${type}`
	})
}


export const getMusicList = (limit = 10) => {
	return useAxios({
		method: 'get',
		url: `/personalized?limit=${limit}`
	})
}
// 获取推荐歌单,可选参数 : limit: 取出数量 , 默认为 10
export function getMusicListApi(limit=10){
	return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}
