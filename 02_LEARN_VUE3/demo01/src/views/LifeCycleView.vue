<template>
  <div ref='root'>
    vue2生命周期展示
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from 'vue'
export default {
  name: "LifeCycleView",
  data() {
    console.log('data-------------')
    return {
      msg: '信息'
    }
  },
  setup() {
    console.log('setup--------------')
    const root = ref(null)
    onBeforeMount(() => {
      console.log('vue3-onBeforeMount-值', root.value)
    })

    onMounted(() => {
      console.log('vue3-onMounted-值', root.value)
    })
    return {
      root
    }
  },
  beforeCreate() {
    console.log('vu2-beforeCreate------------------', this.msg)
  },
  created() {
    console.log('vue2-created------------------', this.msg)
  },
  beforeMount() {
    console.log('vue2-beforeMount------------------', this.msg)
  },
  mounted() {
    console.log('vue2-mounted------------------', this.msg)
  },
  beforeUpdate() {
    console.log('vue2-beforeUpdate------------------', this.msg)
  },
  updated() {
    console.log('vue2-updated------------------', this.msg)
  },
  beforeUnmount() {
    console.log('vue2-beforeUnmount------------------', this.msg)
  },
  unmounted() {
    console.log('vue2-unmounted------------------', this.msg)
  }
}
</script>

<style scoped>

</style>
