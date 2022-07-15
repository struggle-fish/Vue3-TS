<template>
  <h1 >计数： {{num}}</h1>
  <button @click="changeNum">点击</button>
</template>

<script>


import {ref} from "vue";

export default {
  name: "CompositeApiView",
  setup() {
    // 变量的定义和操作方法是紧紧放在一起的
    const num = ref(0)

    const changeNum  = () => {
      num.value++
    }

    return {
      num,
      changeNum
    }
  }
}
</script>

<style scoped>

</style>
