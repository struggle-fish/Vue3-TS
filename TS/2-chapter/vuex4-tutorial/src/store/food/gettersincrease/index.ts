import store from '@/store'
import { FoodStateListState } from '../state'

type foodModuleGetters = {
  "foodModule/getFoodList": (state: FoodStateListState) => void;
}


function getFoodModuleGetters() {
  return store.getters as foodModuleGetters
}

export default getFoodModuleGetters()
