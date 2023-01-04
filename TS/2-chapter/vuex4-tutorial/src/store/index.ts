import { createStore } from '@/vuex4/index12-16'
// import { createStore } from 'vuex'
import { foodModule, foodSortModule, hotelSortModule, } from './modulecollection'
import { RootState } from './rootstate'

export default createStore<RootState>({

  modules: {
    foodModule: foodModule,
    foodSortModule: foodSortModule,
    hotelSortModule: hotelSortModule
  }
})