<template>
  <div class="hello">
    <h1>{{store.state.message}}</h1>
    <button @click="store.setMessage('修改一下vuex')">修改store里的数据</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject: ['store']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
