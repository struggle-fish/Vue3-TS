<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang3"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">（共{{playlist.tracks.length}}首）</div>
        </div>
      </div>
      <div class="btn">
        + 收藏（{{changeValue(playlist.subscribedCount)}}）
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PlayList",
  props: ['playlist'],
  methods: {
    changeValue: function (num) {
      let res = 0
      if (num >= 100000000) {
        res = num / 100000000
        res = res.toFixed(2) + '亿'

      } else if (num > 10000) {
        res = num / 10000
        res = res.toFixed(2) + '万'
      }
      return res
    },
  }
}
</script>

<style lang="less" scoped>
.playlist {
  width: 7.5rem;
  padding: 0 0.4rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  margin-top: 0.4rem;

  .playlist-top {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }

      .title {
        font-size: 0.34rem;
        font-weight: 900;
      }

      .num {
        font-size: 0.24rem;
        color: #666;
      }

      .text {
        display: flex;
        align-items: center;
        margin-left: 0.2rem;
      }

    }

    .btn {
      font-size: 0.24rem;
      color: #fff;
      background-color: orangered;
      line-height: 0.6rem;
      padding: 0.1rem;
      border-radius: 0.4rem;

    }
  }

  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1rem;

      .left {
        flex: 1;
        display: flex;
        align-items: center;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        word-wrap: break-word;

        .index {
          width: 0.4rem;
        }

        .content {
          padding-left: 0.4rem;
          width: 100%;
        }

        .title {
          width: calc(100% - 0.4rem);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-break: break-all;
          word-wrap: break-word;
          font-size: 0.3rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 0.1rem;
        }

        .tag {
          font-size: 0.2rem;
          color: orangered;
          border: 1px solid orangered;
          border-radius: 0.1rem;
          margin-right: 0.1rem;

        }

        .anthor {
          color: #666;
          display: flex;
          overflow: hidden;
          height: 0.35rem;

          .name {
            width: 3rem;
          }
        }
      }

      .right {
        width: 1.6rem;

        .icon {
          margin: 0 0.2rem
        }
      }

    }
  }
}
</style>
