<template>
  <div class="stageList">
    <h3>往期排行</h3>
    <p>下期投票时间 2017.11.26 20:30:00</p>
    <div>
      <div v-for="item in list" class="btn_rankOld" @click="showRank(item.stageID)">回顾【{{item.name}}】</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StageList',
    data () {
      return {
        list: [
          {name: '毛子哥战队组内pk0', stageID: 'stageID1230'},
          {name: '毛子哥战队组内pk1', stageID: 'stageID1231'},
          {name: '毛子哥战队组内pk2', stageID: 'stageID1232'},
          {name: '毛子哥战队组内pk3', stageID: 'stageID1233'}
        ]
      }
    },
    methods: {
      showRank (stageID) { // 跳转选手列表
        console.log(123)
        console.log(stageID, 'stageID')
        this.$router.push({path: 'rank', query: {stageID: stageID}})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn_rankOld{
    width: 80%;
    text-align: center;
    margin: 20px auto;
    padding: 10px 0;
    background: cadetblue;
  }
</style>
