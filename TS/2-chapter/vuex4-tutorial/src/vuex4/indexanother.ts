import { inject, App } from 'vue';
const storeKey = 'store';
export function useStore<S = any>(): Store<S> {
  return inject(storeKey) as any
}

export interface StoreOptions<S> {
  getters?: GetterTree<S, S>;
  state?: S,
  actions?: ActionTree<S, S>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<S>;
}

interface ModuleTree<R> {
  [key: string]: Module<any, R>
}

interface Module<S, R> {
  namespaced?: boolean;
  //state?: S | (() => S);
  state?: S;
  actions?: ActionTree<S, R>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<R>
  getters?: GetterTree<S, R>
}

// GetterTree接口和相关
type Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any
interface GetterTree<S, R> {
  [key: string]: Getter<S, R>
}
// ActionTree接口和相关
type Action<S, R> = (injectee: ActionContext<S, R>, payload?: any) => any
interface ActionTree<S, R> {
  [key: string]: Action<S, R>
}
export interface ActionContext<S, R> {
  dispatch: Dispatch;
  commit: Commit;
  state: S
}
// MutationTree开始
interface MutationTree<S> {
  [key: string]: Mutation<S>
}
type Mutation<S> = (state: S, payload?: any) => any;

export type Commit = (type: string, payload?: any, options?: any) => void
export type Dispatch = (type: string, payload?: any, options?: any) => any
class Store<S>{
  constructor(options: StoreOptions<S>) {
    console.log("options:", options);
  }

  install(app: App): void {
    console.log("install store to app....");
    app.provide(storeKey, this);
  }

}

export function createStore<S>(options: StoreOptions<S>) {
  return new Store<S>(options)
}