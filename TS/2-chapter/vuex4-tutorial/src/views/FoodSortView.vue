<template>
  <div style="padding:20px;">
    美食分类
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/vuex4/indexanother'

export default defineComponent({
  setup() {
    const store = useStore()
    let foodSortList = {}
    return {
      foodSortList,
    }
  },
})
</script>
