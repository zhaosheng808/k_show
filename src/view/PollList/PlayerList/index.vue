<template>
  <div class="player_list">
    <div v-for="item in userList" class="player_item">
      <div class="avatar">
        <img :src="img1">
      </div>
      <div class="player_info">
        <div class="column">
          <div class="label">选手战队</div>
          <div class="column_value">{{item.corp}}</div>
        </div>
        <div class="column">
          <div class="label">参赛选手</div>
          <div class="column_value">{{item.name}}</div>
        </div>
        <div class="column">
          <div class="label">参赛宣言</div>
          <div class="column_value">{{item.slogan}}</div>
        </div>
        <div class="column">
          <div class="label"></div>
          <div class="column_value btn_full" @click="vote(item.id)">投他一票</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import img1 from '@/assets/logo.png'
  export default {
    name: 'PlayerList',
    props: {
      userList: {
        type: Array,
        default: function () {
          return []
        }
      },
      vote: {
        type: Function
      }
    },
    data () {
      return {
        img1
      }
    },
    methods: {
      rule_show: () => { // 跳转选手列表
        alert('显示规则')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .player_list{
    margin: 20px 0;
  }
  .player_item{
    height: 80px;
    margin-bottom: 30px;
  }
  .avatar{
    width: 80px;
    height: 80px;
    float: left;
    background: chartreuse;
  }
  .avatar img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .player_info{
    height: 100%;
    margin-left: 86px;
    display: flex;
    flex-direction: column;
    align-content: stretch;
  }
  .column_value{
    margin-left: 70px;
  }

  .label{
    width: 70px;
    font-weight: 600;
    float: left;
  }
  .btn_full{
    text-align: center;
    background: crimson;
  }
</style>
