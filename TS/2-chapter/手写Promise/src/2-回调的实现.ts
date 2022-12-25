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

    executor(this.resolve, this.reject)
  }



  then(resolveInthen: ResolveType, rejectInthen: RejectType) {
    if (this.status === 'success') {
      resolveInthen(this.resolve_executor_value)
    }

    if (this.status === 'fail') {
      rejectInthen(this.reject_executor_value)
    }
  }

}










export {}