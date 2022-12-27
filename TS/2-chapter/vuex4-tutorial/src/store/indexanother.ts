import { RootState } from './rootstate'
import { createStore, ActionContext } from '@/vuex4/indexanother'

export default createStore<RootState>({
  state: {
    navList: ["12", "23"]
  },
  getters: {
    showNav(state) {
      return state.navList
    }
  },
  mutations: {
    showNav(state, navList) {
      return state.navList = navList
    }
  },
  actions: {
    showNav({ commit }: ActionContext<RootState, RootState>, navList: any) {
      setTimeout(() => {
        commit("showNav", navList)
      })
    }
  }
})