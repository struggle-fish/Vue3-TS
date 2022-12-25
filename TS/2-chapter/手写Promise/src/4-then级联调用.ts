import { RejectType, ResolveType, Executor } from './actiontype'





export default class Promise<T = any> {
  resolve!: ResolveType
  
  reject!: RejectType
  status!: string
  resolve_executor_value!: any
  reject_executor_value!: any


  constructor(executor: Executor) {
    this.status = 'pending'

    this.resolve = (value: any) : any => {
      if (this.status === 'pending') {
        this.status = 'success'
        // value[10] = 100
        this.resolve_executor_value = value
        console.log('resolve==>value', value)
      }
      
    }

    this.reject = (value: any) : any => {
      if (this.status === 'pending') {
        this.status = 'fali'
        this.reject_executor_value = value
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
    })
  }

}










export {}