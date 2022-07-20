<template>
  <div class="home">
    <div>入口列表</div>
    <router-link to="/lifecycle">vue2生命周期</router-link><br/>
    <router-link to="/compositeapi">组合Api</router-link><br/>
    <router-link to="/globalstore">全局状态</router-link><br/>
    <router-link to="/ajax">ajax请求</router-link><br/>
    <router-link to="/vuex">vuex浅尝</router-link><br/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
