import useAxios from './myaxios'



// 获取轮播图的api,type:资源类型,对应以下类型,默认为 0 即PC
// 1: android;2: iphone;3: ipad
export function getBanner(){
	return useAxios({
		method: 'get',
		url: '/banner?type=2'
	})
}
