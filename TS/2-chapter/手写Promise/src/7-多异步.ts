import { RejectType, ResolveType, Executor } from './actiontype'





export default class Promise<T = any> {
  resolve!: ResolveType
  
  reject!: RejectType
  status!: string
  resolve_executor_value!: any
  reject_executor_value!: any
  // 保存成功状态要执行的函数
  resolve_then_callbacks: (() => void)[] = []
  // 保存失败状态要执行的函数
  reject_then_callbacks: (() => void)[] = []

  constructor(executor: Executor) {
    this.status = 'pending'

    this.resolve = (value: any) : any => {
      if (this.status === 'pending') {
        this.status = 'success'
        // value[10] = 100
        this.resolve_executor_value = value
        this.resolve_then_callbacks.forEach(callback => callback())
        console.log('resolve==>value', value)
      }
      
    }

    this.reject = (value: any) : any => {
      if (this.status === 'pending') {
        this.status = 'fali'
        this.reject_executor_value = value
        this.reject_then_callbacks.forEach(callback => callback())
        console.log('reject==>value', value)
      }
    }

    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.status = 'pending'
      this.reject(error?.toString())
      throw new Error('执行器报错')
    }
  
  }



  then(resolveInthen: ResolveType, rejectInthen: RejectType) {
    return new Promise((resolve, reject) => {
      let result
      if (this.status === 'success') {
        result = resolveInthen(this.resolve_executor_value)
        resolve(result)
      }
  
      if (this.status === 'fail') {
        result = rejectInthen(this.reject_executor_value)
        reject(result)
      }

      // 如果status 是 pending的时候，就先保存下来，异步执行
      if (this.status === 'pending') {
        this.processManyAsyncAndSync(resolveInthen, rejectInthen, resolve, reject)
      }

    })
  }

  processManyAsyncAndSync(resolveInthen: ResolveType, rejectInthen: RejectType, resolve: ResolveType, reject: RejectType) {
    let result: any

    this.resolve_then_callbacks.push(() => {
      result = resolveInthen(this.resolve_executor_value)
      if (isPromise(result)) { // 是异步的Promise对象
        setTimeout(() => {
          resolve(result.resolve_executor_value)
        }, 5)
      } else {
        resolve(result) // 如果是普通的数据,不是异步的Promise对象
      }
    })
    
    this.reject_then_callbacks.push(() => {
      result = rejectInthen(this.reject_executor_value)
      reject(result)
    })
  }


}




function isObject(val: any): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

function isFunction(val: any): val is Function {
  return typeof val === 'function'
}

function isPromise(val: any): val is Promise {
  return isObject(val) && isFunction(val.then)
}




// function isPromise(val: any): val is Promise {

//   return typeof val === 'object' && typeof val.then === 'function'
// }


// TODO: TS中这样写是不允许的，会根据指定类型要属性，object没有then
// let obj: object = {}
// obj.then = "df"

// TODO:  更新下写法
// let val : Record<any, any> = {}
// val.then = "df"
// val ["then"]="df"



export {}