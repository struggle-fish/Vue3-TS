<template>
  <div style="padding:20px;">
    <div style="margin-top:2px" v-for="(item, key) in foodSortList">
      <div style="border:1px solid red;display:flex;margin-left:30px">
        <div style="flex:1">{{ key }}</div>
        <div style="flex:5">
          <div style="display:flex;" v-for="(value, key) in item">
            <div style="flex:1">{{ key }}</div>
            <div style="flex:1">
              <router-link to="">{{ value }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from '@/vuex4/index12-16'
import { RootState } from '@/store/rootstate'
import getFoodModuleGetters from '@/store/food/gettersincrease'

export default defineComponent({
  setup() {
    const store = useStore<RootState>()
    console.log(store, 'store是什么1')
    // console.log(store.getters['foodSortModule/getFoodSortList'], '数据啊')
    // store.commit('foodSortModule/FindFoodSortList', {
    //   1: {
    //     id: 1,
    //     type: '新数据-1'
    //   }
    // })
    // console.log(getFoodSortModuleGetters['foodSortModule/getFoodSortList'], '数据啊-1')

    onMounted(() => {
      store.dispatch('foodModule/FindFoodList')
    })
    return {
      store,
      foodSortList: computed(() => {
        console.log('巅峰时的---111store.getters', store.getters)
        console.log(getFoodModuleGetters['foodModule/getFoodList'], '数据是多少')
        // TODO: 注意这里为什么 不 store.getters['xxxx'] 是因为不能自动获取
        return getFoodModuleGetters['foodModule/getFoodList']
      }),
    }
  },
})
</script>
 