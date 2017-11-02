<template>
  <div class="pollList">
    <div class="banner">
      <h2>毛子哥战队组内pk</h2>
      <p>本期已有 <span class="poll_total">{{total}}</span>人次参与投票</p>
    </div>
    <div class="nav">
      <div class="nav_button">PK排行榜</div>
      <div class="nav_button" @click="rule_show">投票规则</div>
    </div>
    <PlayerList :userList="userList" :vote="vote"></PlayerList>
  </div>
</template>

<script>
  import PlayerList from './PlayerList/index.vue'
  export default {
    name: 'PollList',
    components: {PlayerList},
    data () {
      return {
        total: 5000,  // 投票总数
        userList: [ // 投票总数
          {name: '西红柿乐队1', id: '1', corp: '毛子哥战队1', slogan: '唱歌是快乐的，唱歌是快乐的，唱歌是快乐的,唱歌是快乐的'},
          {name: '西红柿乐队2', id: '12', corp: '毛子哥战队', slogan: '唱歌是快乐的，唱歌是快乐的，唱歌是快乐的,唱歌是快乐的'},
          {name: '西红柿乐队3', id: '123', corp: '毛子哥战队', slogan: '唱歌是快乐的，唱歌是快乐的，唱歌是快乐的,唱歌是快乐的'},
          {name: '西红柿乐队4', id: '12c4', orp: '毛子哥战队', slogan: '唱歌是快乐的，唱歌是快乐的，唱歌是快乐的,唱歌是快乐的'}
        ]
      }
    },
    methods: {
      rule_show () { // 跳转选手列表
        alert('显示规则')
      },
      // 投票
      vote (playerId) {
        console.log('player_id', playerId)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .poll_total{
    color: crimson;
    font-size: 16px;
  }
  .banner{
    height: 150px;
    background: cadetblue;
  }
  .nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
  }
  .nav .nav_button{
    text-align: center;
    padding: 10px 20px;
    background: cornsilk;
  }
</style>
