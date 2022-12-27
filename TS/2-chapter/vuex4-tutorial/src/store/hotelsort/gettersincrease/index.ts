import store from '@/store';

import { HotelSortListState } from '../state'

type hotelSortModuleGetters = {
  'hotelSortModule/getHotelSortList': (state: HotelSortListState) => void
}


function getHotelModuleGetters() {
  return store.getters as hotelSortModuleGetters
}

export default getHotelModuleGetters()