<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <swiper
          class="swiper-container"
          :modules="modules"
          :slides-per-view="3"
          :space-between="10"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >

        <swiper-slide v-for="(item, index) in musicList" :key="index">
          <img :src="item.picUrl" >
          <div class="name">{{item.name}}</div>
          <div class="count">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang1"></use>
            </svg>
            <span>{{ changeValue(item.playCount) }}</span>
          </div>
        </swiper-slide>
      </swiper>

    </div>

  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper";
import {getMusicListApi} from "@/api";
import {onMounted, reactive, toRefs, watchEffect} from "vue";

export default {
  name: "MusicList",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    let state = reactive({
      musicList: []
    })

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    // TODO: 这里不是很懂，既然都setup里用了，咋还用onMounted 呢，
    // 有没有其他的方式，更优雅些的
    onMounted(async() => {
      const resp = await getMusicListApi()
      console.log(resp, '音乐列表数据')
      state.musicList = resp.data.result
    })


    function changeValue (num){
      let res = 0
      if(num>=100000000){
        res = num/100000000
        res = res.toFixed(2) + '亿'

      }else if(num>10000){
        res = num/10000
        res = res.toFixed(2) + '万'
      }
      return res
    }

    watchEffect(() => {
    })

    return {
      onSwiper,
      onSlideChange,
      ...toRefs(state),
      changeValue,
      modules: [Autoplay, EffectFade],
    }
  },
}
</script>

<style lang="less" scoped>
.musicList{
  width: 7.5rem;
  padding: 0 0.4rem;
  .musicList-top{
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .title{
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more{
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      height: 0.5rem;
      width: 1.2rem;
      text-align: center;
      line-height: 0.5rem;
    }
  }
  .mlist{
    .swiper-container{
      width: 100%;
      //height: 4rem;
      .swiper-slide {

        display: flex;
        flex-direction: column;
        position: relative;
        img{
          width:100%;
          height: auto;
          border-radius: 0.1rem;
        }
        .name{
          height: 1rem;
          width: 100%;
          font-size: 0.24rem;
        }
        .count{
          position:absolute;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.24rem;
          color: #fff;
          display: flex;
          align-items: center;
          .icon{
            fill: #fff;
          }
        }
      }
    }

  }
}
</style>
