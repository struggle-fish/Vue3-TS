<template>
  <div style="padding:20px;">
    美食分类
  </div>
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
import { defineComponent, onMounted, computed } from 'vue'
// import { useStore } from '@/vuex4/indexanother'
import { useStore } from '@/vuex4'
import { RootState } from '@/store/rootstate'
import getFoodSortModuleGetters from '@/store/foodsort/gettersincrease'

export default defineComponent({
  setup() {
    const store = useStore<RootState>()
    onMounted(() => {
      store.dispatch('foodSortModule/FindFoodSortList')
    })
    // let foodSortList = {}
    return {
      // foodSortList,
      foodSortList: computed(() => {
        console.log('巅峰时的---222store.getters', store.getters)
        // TODO: 注意这里为什么 不 store.getters['xxxx'] 是因为不能自动获取
        return getFoodSortModuleGetters['foodSortModule/getFoodSortList']
      }),
    }
  },
})
</script>
