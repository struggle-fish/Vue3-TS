<template>
  <h1>数量={{ $store.state.count }}</h1>
  <h1>价格：100</h1>
  <h1>总价格：{{$store.getters.totalPrice}}</h1>
  <button @click="changeClick">加一个</button>


  <ul>
    <li v-for="(item, index) in $store.getters.listData" :key="index">
      {{ item.alias }}
    </li>
  </ul>

</template>

<script>
export default {
  name: "VuexView",
  setup() {

    return {}
  },
  mounted() {
    this.$store.dispatch('getList')
  },
  methods: {
    changeClick() {
      this.$store.commit('setCount', 10)
    }
  }
}
</script>

<style scoped>

</style>
