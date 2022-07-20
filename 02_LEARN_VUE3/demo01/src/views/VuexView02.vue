<template>
  <h1>数量={{ count }}</h1>
  <h1>数量-{{count2}}</h1>
  <h1>价格：100</h1>
  <h1>总价格：{{totalPrice}}</h1>
  <h1>总价格2：{{ totalPrice2 }}</h1>
  <button @click="changeClick">加一个</button>

  <button @click="setCount(5)">加一个</button>
  <ul>
    <li v-for="(item, index) in $store.getters.listData" :key="index">
      {{ item.alias }}
    </li>
  </ul>

</template>

<script>
import {
  mapState,
  mapMutations,
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: "VuexView02",
  setup() {

    return {}
  },
  computed: {
    ...mapState([
        'count',
    ]),
    ...mapState({
      'count2': (state) => state.count
    }),
    ...mapGetters(['totalPrice']),
    ...mapGetters({
      totalPrice2: 'totalPrice'
    })
  },
  mounted() {
    // 直接调用
    // this.$store.dispatch('getList')

    // 映射方式
    this.getList()
  },
  methods: {
    ...mapMutations(['setCount']),
    ...mapActions([
        'getList'
    ]),
    changeClick() {
      this.$store.commit('setCount', 10)
    }
  }
}
</script>

<style scoped>

</style>
