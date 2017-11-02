<template>
  <div class="home">
    <h1>名嘴k歌秀</h1>
    <button @click="vote">立即投票</button>
    <button @click="rank">往期排行</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        legitimate: true,  // 投票是否合法
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      vote () { // 跳转选手列表
        if (this.legitimate) {
          this.$router.push({
            path: 'poll',
            query: { stage: '1', userId: '123456' } // 期数 + id
          })
        } else { // 跳转历史pk列表
          console.log('跳转历史pk列表')
        }
      },
      rank () {
        this.$router.push({
          path: 'stageList'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
