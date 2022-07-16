<template>
  <UserProvide  />
</template>

<script>
import UserProvide from "@/views/CompositeApi/components/UserProvide";
import {toRefs, reactive, provide} from "vue";


export default {
  name: "componentsView",
  components: {
    UserProvide
  },
  setup() {
    const user = reactive({
      userName: '江小鱼',
      age: 10
    })
    provide('user', user)
    return {
      ...toRefs(user)
    }
  }
}
</script>

<style scoped>

</style>
