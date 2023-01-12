import axios from '../src/index'
const baseUrl = `http://localhost:3003`
// http://localhost:3003/hot/topic?limit=30&offset=30
const date = new Date()
axios({
  url: `${baseUrl}/hot/topic`,
  
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

})