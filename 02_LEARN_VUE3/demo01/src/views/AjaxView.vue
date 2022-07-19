<template>

</template>

<script>
import axios from 'axios'
export default {
  name: "AjaxView",
  setup() {
    // let api = `https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn`
    // fetch(api).then(res => res.json()).then(result => {
    //   console.log(result)
    // })
    // axios.get(api).then(res => {
    //   console.log(res)
    // })

    // mock 测试
    let api = `/user/userinfo`
    axios.get(api).then(res => {
      console.log(res)
    })
    return {}
  }
}
</script>

<style scoped>

</style>
