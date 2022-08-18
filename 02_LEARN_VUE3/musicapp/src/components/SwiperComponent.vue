<template>
  <div v-if="error.code == -1">页面有错误</div>
  <div v-else>{{ data }}</div>
  <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item,i) in imgs?.banners" :key="i">
      <img :src="item.pic" >
    </swiper-slide>
  </swiper>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import {Autoplay, EffectFade, Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/vue';
import {getBanner, getBanner2} from "@/api";
export default defineComponent({
  name: "SwiperComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    const { refetch: bannerFetch, data: imgs } = getBanner()
    const { data, error } = getBanner2()

    bannerFetch()
    onMounted(async () => {
      console.log(data,  'data33333')
      console.log(error, 'data-error')
    })
    return {
      onSwiper,
      onSlideChange,
      imgs,
      data,
      error,
      modules: [Autoplay, EffectFade, Pagination],
    };
  },
  mounted() {
  }
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
