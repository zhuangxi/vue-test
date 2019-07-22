import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nextTickDemo from '@/components/nextTickdemo'
import server from '@/components/server'
import dewmo from '@/components/dewmo'
import player from '@/components/player'
import xlsx from '@/components/xlsx'
import echart from '@/components/echart'
import demo01 from '@/components/echarts/demo01'
import demo02 from '@/components/echarts/demo02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/next',
      name: 'nextTickDemo',
      component: nextTickDemo
    },
    {
      path: '/server',
      name: 'server',
      component: server
    },
    {
      path: '/dewmo',
      name: 'dewmo',
      component: dewmo
    },
    {
      path: '/player',
      name: 'player',
      component: player
    },
    {
      path: '/xlsx',
      name: 'xlsx',
      component: xlsx
    },
    {
      path: '/echart',
      component: echart,
      children: [
        {
          path: '/echart/demo01',
          name: 'demo01',
          component: demo01
        },
        {
          path: '/echart/demo02',
          name: 'demo02',
          component: demo02
        },
        {
          path: '/echart/demo03',
          name: 'demo03',
          component: ()=>import('@/components/echarts/demo03')
        }
      ]
    },
    {
      path: '/inOut',
      name: 'inOut',
      component: ()=>import('@/components/inOut')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: ()=>import('@/components/dialog')
    }
  ]
})
