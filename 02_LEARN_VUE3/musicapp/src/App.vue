<template>
  <router-view/>
</template>
<script>
import Axios from "axios";
import {useConfigure} from "@/api/store";

export default  {
  setup() {
    // TODO：这里怎么优化下，先放着
    const axios = Axios.create({
      baseURL: 'http://localhost:3003'
    })

    axios.interceptors.response.use(
        (res) => {
          console.log('这个是什么呀---', res.data)
          return res.data
        }
    )
    useConfigure({ axios })
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}

</style>
