// TODO: 可索引的，没有 getFoodSortList
export interface GetterTree<S = any, R = any> {
  [key: string]: Getter<S, R>;
}
export type Getter<S, R> = (state: S, getters: any, rootState: R, rootGetters: any) => any;

let getters: GetterTree = {
  getFoodSortList() {
    return "getter"
  }
}
// TODO:  定义一个子类型
type foodSortModuleGetters = {
  "getFoodSortList": () => void
}


console.log((getters as foodSortModuleGetters).getFoodSortList());

export { }

