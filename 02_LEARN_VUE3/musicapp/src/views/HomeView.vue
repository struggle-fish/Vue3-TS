<template>
  <div class="home">
    <TopNav/>
    <SwiperComponent/>

  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav";
import SwiperComponent from "@/components/SwiperComponent";


export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwiperComponent
  }
}
</script>
<style lang="less" scoped>
#d1 {
  width: 3.75rem;
  height: 3.75rem;
  background: red;
}
</style>
