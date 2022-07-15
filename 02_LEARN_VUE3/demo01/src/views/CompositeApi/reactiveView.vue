<template>
  <h2>用户名-{{user.userName}}</h2>
  <h2>年龄-{{user.age}}</h2>

  结构之后
  <h2>用户名-{{userName}}</h2>
  <h2>年龄-{{age}}</h2>
  <h2>计算属性-{{ reverseName }}</h2>
  <button @click="changeName">修改名字</button>

  <button @click="changeNum">修改年龄</button>

</template>

<script>
import {computed, reactive, toRefs, watch, watchEffect} from "vue";

export default {
  name: "reactiveView",
  setup() {

    const user = reactive({
      userName: '江小鱼',
      age: 10,
      reverseName: computed(() => {
        return user.userName.split('').reverse().join('')
      })
    })

    const changeNum = () => {
      user.age++
    }


    const changeName = () => {
      user.userName = '小铜钱'
    }

    watchEffect(() => {
      console.log(user.userName, '改变了-1')
    })

    watch(() => user.age, (newVal, oldVal) => {
      console.log(newVal, oldVal)
    })

    watch([
      () => user.userName,
      () => user.age
    ], ([userName, age], [oldUserName, oldAge]) => {
      console.log(userName, oldUserName)
      console.log(age, oldAge)
    })


    return {
      user,
      ...toRefs(user), // 使一个对象变成响应式
      changeName,
      changeNum
    }
  }
}
</script>

<style scoped>

</style>
