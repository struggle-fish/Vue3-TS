import { createStore } from '@/vuex4/index'
import { foodSortModule, hotelSortModule, } from './modulecollection'
import { RootState } from './rootstate'

export default createStore<RootState>({

  modules: {

    foodSortModule: foodSortModule,
    hotelSortModule: hotelSortModule
  }
})