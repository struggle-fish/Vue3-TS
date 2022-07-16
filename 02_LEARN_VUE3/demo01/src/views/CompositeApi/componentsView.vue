<template>
  <User :userName="userName" :age="age" />
</template>

<script>
import User from "@/views/CompositeApi/components/User";
import {toRefs, reactive} from "vue";


export default {
  name: "componentsView",
  components: {
    User
  },
  setup() {
    const user = reactive({
      userName: '江小鱼',
      age: 10
    })
    return {
      ...toRefs(user)
    }
  }
}
</script>

<style scoped>

</style>
