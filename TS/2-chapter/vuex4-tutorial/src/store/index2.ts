import { createStore } from '@/vuex4/index2'
import { RootState } from './rootstate'
import { foodSortModule, hotelSortModule } from './modulecollection'



export default createStore({
  state: {
    navList: ["12", "23"]
  },

  getters: {
    getNavList(state) {
      return state.navList
    }
  },

  mutations: {
    findNavList(state, navList) {
      return state.navList = navList
    }
  },

  actions: {
    findNavList({ commit }) {
      setTimeout(() => {
        let navList = ['abc', 'bc']
        commit('findNavList', navList)
      }, 1000)
    }
  }
})
