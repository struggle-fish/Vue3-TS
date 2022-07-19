<template>
  <HelloWorld/>
</template>

<script>
import {reactive} from "vue";
import HelloWorld from "@/components/HelloWorld";

// 全局状态管理，非vuex
const store = {
  state: reactive({
    message: '你好全世界vuex'
  }),
  setMessage(value) {
    this.state.message = value
  }
}
export default {
  name: "GlobalStoreView",
  components: {
    HelloWorld
  },
  provide: {
    store
  }
}
</script>

<style scoped>

</style>
