<template>
  <router-view/>
</template>
<script>
import {useConfigure} from "@/api/store";
export default  {
  setup() {
    useConfigure()
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
