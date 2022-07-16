<template>
  <h1>用户名：{{ userName }}</h1>
  <h1>年龄：{{ age }}</h1>
</template>

<script>
import {inject} from "vue";

export default {
  name: "UserComponent",
  setup() {
    const user = inject('user')
    return {
      ...user
    }
  }
}
</script>

<style scoped>

</style>
