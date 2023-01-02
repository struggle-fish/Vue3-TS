import { createStore } from '@/vuex4/index12-13'
// import { createStore } from 'vuex'
import { foodSortModule, hotelSortModule, } from './modulecollection'
import { RootState } from './rootstate'

export default createStore<RootState>({

  modules: {
    foodSortModule: foodSortModule,
    hotelSortModule: hotelSortModule
  }
})