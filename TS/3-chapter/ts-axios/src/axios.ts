import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

// TODO: 定义混合对象, 仔细看看这里的实现
function createInstance() {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
