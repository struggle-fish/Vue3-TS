
import { inject, App } from 'vue';
var storeKey = 'store';



export function useStore<S = any>(): Store<S>{
  return inject(storeKey) as any
}

class Store<S = any> {
  constructor(options: StoreOptions<S>) {
    console.log('options2--是多少', options)
  }

  install(app:App) {
    app.provide(storeKey, this)
  }
  test() {
    return '我是store'
  }
}


interface StoreOptions<S> {
  state?: S;
  getters?: GettersTree<S, S>;
  mutations?: MutationTree<S>;
  actions?: ActionTree<S, S>
}

interface ActionContext<S, R> {
  dispatch: Dispatch;
  commit: Commit;
  state: S;

}

type Dispatch = (type: string, payload?: any) => any

type Commit = (type: string, payload?: any) => any



interface ActionTree<S,R> {
  [key: string]: Action<S, R>
}

type Action<S,R> = (context: ActionContext<S,R>, payload?: any) => any


// MutationTree
interface MutationTree<S> {
  [key: string]: Mutation<S>
}

type Mutation<S> = (state: S, payload?:any) => void


// getters
interface GettersTree<S, R> {
  [key: string]: Getter<S, R>
}

type Getter<S,R> = (state: S, getter: any, rootState:R, rootGetters: any) => any




export function createStore<S>(options: StoreOptions<S>) {
  return new Store<S>(options)
}


export {}