<template>
  <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item,i) in imgs" :key="i">
      <img :src="item.pic" >
    </swiper-slide>
  </swiper>
</template>

<script>
import {defineComponent} from 'vue'
import {Autoplay, EffectFade, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue';

export default defineComponent({
  name: "SwiperComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imgs: [
        {pic: require('../assets/img/swiper1.jpg')},
        {pic: require('../assets/img/swiper2.jpg')},
        {pic: require('../assets/img/swiper3.png')}
      ]
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, EffectFade, Pagination],
    };
  },
})
</script>

<style scoped lang="less">
.swiper {
  margin: 0 0.2rem;
  border-radius: 0.2rem;
}
.swiper-slide {
  height: 3rem;
  font-size: 30px;
  text-align: center;
  background-color: pink;
  img {
    display: block;
    width: 100%;
  }
}

.swiper::v-deep .swiper-pagination .swiper-pagination-bullet {
  background: rgb(255, 255, 255);
}

.swiper::v-deep .swiper-pagination .swiper-pagination-bullet-active {
  background: rgb(255, 0, 0);
}
</style>
