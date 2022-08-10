<template>
  <div class="home">
    <TopNav/>
    <SwiperComponent/>
    <IconList/>
    <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav";
import SwiperComponent from "@/components/SwiperComponent";
import IconList from "@/components/IconList";
import MusicList from "@/components/MusicList";

export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwiperComponent,
    IconList,
    MusicList
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
