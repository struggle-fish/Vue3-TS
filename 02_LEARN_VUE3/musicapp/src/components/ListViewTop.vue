<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl">
    <div class="listViewTopNav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sdf"></use>
        </svg>
        <div class="title">
          歌单
        </div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListViewTop",
  props: ['playlist']
}
</script>

<style lang="less" scoped>
.listViewTop{
  width: 7.5rem;
  padding: 0 0.4rem;
  .bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter:blur(40px)
  }
  .listViewTopNav{
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 1.2rem;
    font-size: 0.35rem;
    .icon{
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .title{
      margin-left: 0.4rem;
    }
    .search{
      margin-right: 0.5rem;
    }
  }
  .back,.right{
    display: flex;
    color: #fff;
  }
  .content{
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    .contentLeft{
      position: relative;
      img{
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.1rem;
      }

      .count{
        position:absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color: #aaa;
        display: flex;
        align-items: center;
        font-weight: 900;
        .icon{
          fill: #ccc;
        }
      }
    }
    .contentRight{
      width: 3.5rem;
      h3{
        color: #fff;
      }
      .author{
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        img.header{
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }
        span{
          color: #ccc;
          font-size: 0.26rem;
        }
      }
      .description{
        font-size: 0.24rem;
        color: #ccc;
        overflow: hidden;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .iconList{
    display: flex;
    justify-content: space-around;
    .iconItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon{
        width: 0.6rem;
        height: 0.6rem;
        fill:#fff;
      }
      span{
        font-size: 0.28rem;
        padding-top: 0.3rem;
        color: #fff;
      }
    }
  }

}
</style>
