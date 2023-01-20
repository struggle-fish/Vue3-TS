import axios from '../src/index'
const baseUrl = `http://localhost:3003`
// http://localhost:3003/hot/topic?limit=30&offset=30
const date = new Date()
const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  method: 'get',
  url: `${baseUrl}/hot/topic`,
  // timeout: 100,
  // 1-数组形式
  // params: {
  //   limit: ['30'],
  //   offset: ['30']
  // }

  // 普通形式
  // params: {
  //   limit: 30,
  //   offset: 30
  // }

  // 对象形式
  // params: {
  //   a: {
  //     limit: 30,
  //     offset: 30
  //   }
  // }

  // 日期形式
  // params: {
  //   date
  // }
  
  // 特殊字符
  // params: {
  //   foo: '@:$, '
  // }

  // 包含空值
  // params: {
  //   foo: 'bar',
  //   baz: null
  // }
  
  // 哈希值
  // params: {
  //   foo: 'ba1r',
  //   baz: null
  // }



  data: {
    a: 1,
    b: 2
  },
  // headers: {
  //   'content-type': 'application/json;charset=utf-8'
  // },
}).then(res => {
  console.log(res, '数据呢11')
})