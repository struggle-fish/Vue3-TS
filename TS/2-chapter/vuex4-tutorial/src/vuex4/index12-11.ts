
import { inject, App } from 'vue';
var storeKey = 'store';



export function useStore<S = any>(): Store<S>{
  return inject(storeKey) as any
}

class Store<S = any> {
  moduleCollection: ModuleCollection<S>
  mutations: Record<string, any> = {}
  actions: Record<string, any> = {}
  commit: Commit
  dispatch: Dispatch
  constructor(options: StoreOptions<S>) {
    console.log('options2--是多少', options)
    this.moduleCollection = new ModuleCollection<S>(options)
    let store = this
    let ref = this
    let commit = ref.commit_
    let dispatch = ref.dispatch_
    this.commit = function boundCommit(type: string, payload: any) {
      commit.call(store, type, payload)
    }
    this.dispatch = function boundDispatch(type: string, payload: any) {
      dispatch.call(store, type, payload)
    }
  }

  install(app:App) {
    app.provide(storeKey, this)
  }
  test() {
    return '我是store'
  }
  commit_(type: string, payload: any) {
    if (!this.mutations[type]) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    this.mutations[type](payload)
  }
  dispatch_(type: string, payload: any) {
    if (!this.actions[type]) {
      console.error(("[vuex] unknown actions type: " + type));
    }
    this.actions[type](payload)
  }
}



class ModuleCollection<R> {
  root!: ModuleWrapper<any, R>
  constructor(rawRootModule: Module<any, R>) {
    this.register([], rawRootModule)
  }

  register(path: string[], rawModule: Module<any, R>) {
    let newModule = new ModuleWrapper<any, R>(rawModule)
    if (path.length === 0) { // path长度等于0 为根模块
      this.root = newModule
    } else {
      // 添加子模块到父级模块中
      console.log("开始添加子模块到父级模块中");
    
      let parentModule = this.get(path.slice(0, -1))
      console.log("1.先获取父级ModuleWrapper对象:", parentModule);
      console.log("2.添加子模块【添加格式：(path——子模块命名空间)-子模块】:");
      parentModule.addChild(path[path.length - 1], newModule)
      console.log("=====================");
    }

    if (rawModule.modules) {
      let sonModules = rawModule.modules
      // Object.keys(sonModules).forEach(key => {
      //   this.register(path.concat(key), sonModules[key])
      // })

      Util.forEachValue(sonModules, (key: string, modules: Module<any, R>) => {
        this.register(path.concat(key), modules)
      })
    }
  }

  get(path: string[]) {
    let module = this.root
    return path.reduce((moduleWrapper: ModuleWrapper<any, R>, key: string) => {
      return module.getChild(key)
    }, module)
  }
}



class ModuleWrapper<S, R> {
  children: Record<string, ModuleWrapper<any, R>> = {}
  rawModule: Module<any, R>
  state: S
  namespaced: boolean
  constructor(rawModule_: Module<any, R>) {
    this.rawModule = rawModule_
    this.state = rawModule_.state || Object.create(null)
    this.namespaced = rawModule_.namespaced || false
  }
  addChild(key: string, moduleWrapper: ModuleWrapper<any, R>) {
    this.children[key] = moduleWrapper
  }

  getChild(key: string){
    return this.children[key]
  }
  
}




interface StoreOptions<S> {
  state?: S;
  getters?: GetterTree<S, S>;
  mutations?: MutationTree<S>;
  actions?: ActionTree<S, S>;
  modules?: ModuleTree<S>
}



interface ModuleTree<R> {
  [key: string]: Module<any, R>
}


interface Module<S, R> {
  namespaced?: boolean;
  state?: S;
  getters?: GetterTree<S, R>;
  mutations?: MutationTree<S>;
  actions?: ActionTree<S, R>;
  modules?: ModuleTree<R>;
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
interface GetterTree<S, R> {
  [key: string]: Getter<S, R>
}

type Getter<S,R> = (state: S, getter: any, rootState:R, rootGetters: any) => any


class Util {
  static forEachValue(obj: object, fn: Function) {
    Object.keys(obj).forEach(key => {
      fn(key, (obj as any)[key])
    })
  }
}

export function createStore<S>(options: StoreOptions<S>) {
  return new Store<S>(options)
}


export {}