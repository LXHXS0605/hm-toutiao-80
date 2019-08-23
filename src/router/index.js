// 创建router实例 导出给main使用
import Vue from 'vue'

import VueRouter from 'vue-router'

import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // name选项作用 找到对应的路由规则
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
