import axios, { AxiosError } from '../src/index'
const baseUrl = `http://localhost:3003`
// http://localhost:3003/hot/topic?limit=30&offset=30
const date = new Date()
const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

// axios({
//   method: 'get',
//   url: `${baseUrl}/hot/topic`,
//   // timeout: 1,
//   // 1-数组形式
//   // params: {
//   //   limit: ['30'],
//   //   offset: ['30']
//   // }

//   // 普通形式
//   // params: {
//   //   limit: 30,
//   //   offset: 30
//   // }

//   // 对象形式
//   // params: {
//   //   a: {
//   //     limit: 30,
//   //     offset: 30
//   //   }
//   // }

//   // 日期形式
//   // params: {
//   //   date
//   // }
  
//   // 特殊字符
//   // params: {
//   //   foo: '@:$, '
//   // }

//   // 包含空值
//   // params: {
//   //   foo: 'bar',
//   //   baz: null
//   // }
  
//   // 哈希值
//   // params: {
//   //   foo: 'ba1r',
//   //   baz: null
//   // }



//   data: {
//     a: 1,
//     b: 2
//   },
//   // headers: {
//   //   'content-type': 'application/json;charset=utf-8'
//   // },
// }).then(res => {
//   console.log(res, '数据呢11')
// }).catch((error: AxiosError) => {
//   console.log(error.message, '错误信息')
//   console.log(error.code)
//   console.log(error.config)
// })

// axios(`${baseUrl}/hot/topic`, {
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })

interface ResponseData<T = any> {
  code: number
  hot: T[]
}

interface TopList {
  actId: number
  [key: string]: any
}

function getTopList<T>() {
  return axios<ResponseData<T>>(`${baseUrl}/hot/topic`)
        .then(res => res.data)
        .catch(err => console.error(err))
}

async function test() {
  const resp = await getTopList<TopList>()
  console.log(resp?.hot[0].actId, '这是什么')
}

test()