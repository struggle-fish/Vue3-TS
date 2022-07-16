<template>
  <h1>用户名：{{ userName }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>描述：{{ description  }}</h1>
</template>

<script>
import {ref, toRefs} from "vue";

export default {
  name: "UserComponent",
  props: [
      'userName',
      'age'
  ],
  setup(props) {
    const {userName, age} = toRefs(props)
    console.log(userName.value, 'username')
    const description = ref(`${userName.value}年龄1是${age.value}`)
    return {
      description
    }
  }
}
</script>

<style scoped>

</style>
