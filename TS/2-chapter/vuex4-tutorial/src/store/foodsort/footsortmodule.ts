import { ActionContext, Module } from '@/vuex4/index-12-15'
import { RootState } from '@/store/rootstate'
import { foodModule } from '@/store/food/foodmodule'
import { state, FoodSortListState } from './state'
import { Types } from './type'
import foodSortRec from './serverdata'

export const foodSortModule: Module<FoodSortListState, RootState> = {
  namespaced: true,
  state,
  getters: {
    getFoodSortList(state) {
      return state.foodSortInfoList
    },
  },
  modules: {
    foodModule: foodModule
  },
  mutations: {
    [Types.FindFoodSortList](state, allfood) {
      state.foodSortInfoList = allfood
      console.log("mutations:正在state.foodSortInfoList:", state.foodSortInfoList)
    }
  },
  actions: {
    [Types.FindFoodSortList]({dispatch,commit,state}:ActionContext<FoodSortListState, RootState>) {
      setTimeout(() => {
        console.log("actions:setTimeOut...");
        commit(Types.FindFoodSortList, foodSortRec)
      }, 5)
    },
  }
}

