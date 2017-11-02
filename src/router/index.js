import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import PollList from '@/view/PollList'
import RankList from '@/view/RankList'
import StageList from '@/view/StageList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',         // 首页
      component: Home
    },
    {
      path: '/rank',
      name: 'rank',          // 排行榜
      component: RankList
    },
    {
      path: '/stageList',
      name: 'stageList',          // 往期比赛列表
      component: StageList
    },
    {
      path: '/poll',
      name: 'poll',          // 投票列表
      component: PollList
    }
  ]
})
