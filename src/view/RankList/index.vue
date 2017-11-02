<template>
  <div class="rankList">
    <h3>名嘴k歌秀榜单</h3>
    <p>当前显示的期数为：{{$route.query.stageID}}</p>
    <button @click="back">返回</button>
  </div>
</template>

<script>
  export default {
    name: 'RankList',
    data () {
      return {
      }
    },
    methods: {
      back () { // 跳转选手列表 // 返回上一页
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
