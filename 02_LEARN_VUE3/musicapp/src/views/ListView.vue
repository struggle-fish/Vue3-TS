<template>
  <ListViewTop :playlist="playlist"/>
  <PlayList :playlist="playlist"/>
</template>

<script>
import {getPlaylistDetail} from "@/api";
import {onMounted, reactive, toRefs} from "vue";
import {useRoute} from 'vue-router'
import ListViewTop from "@/components/ListViewTop";
import PlayList from "@/components/PlayList";
export default {
  name: "ListView",
  components: {
    ListViewTop,
    PlayList
  },
  setup() {
    const route = useRoute()
    let state = reactive({
      list: [],
      playlist: {
        creator: {},
        tracks: []
      }
    })


    onMounted(async () => {
      let id = route.query.id
      console.log(id, 'route')
      const resp = await getPlaylistDetail(id)
      console.log(resp, '歌单数据')
      state.playlist = resp?.data?.playlist ?? {}
    })



    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>

</style>
