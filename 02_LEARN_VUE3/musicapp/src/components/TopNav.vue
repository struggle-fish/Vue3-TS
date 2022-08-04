<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon search" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <div class="topCenter">
      <span class="navBtn">我的</span>
      <span class="navBtn">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight">
      <svg class="icon search" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style scoped lang="less">
.topNav{
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  .icon{
    width: 0.5rem;
    height: 0.5rem;
  }
  .search{
    width: 0.45rem;
    height: 0.45rem;
  }
  .topCenter{
    width: 4.5rem;
    display: flex;
    justify-content: space-around;
    .active{
      font-weight: 900;
    }
  }

}
</style>
