class Store<S = any> {
  constructor(options: StoreOptions<S>) {

  }
}


interface StoreOptions<S> {
  state: S;
  getters: GettersTree<S, S>,
  mutations: MutationTree<S>,
  actions: ActionTree<S, S>
}


interface ActionTree<S,R> {
  
}

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



export {}