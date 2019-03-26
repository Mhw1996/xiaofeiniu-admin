import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)
// 整个项目的路由词典：访问路径<=>试图组件
export default new Router({
  routes: [
    {path:'/',redirect:'/login'},//重定向到login
    {path:'/login',component:Login}, 
    {path:'/main',component:Main}, //主界面
    {path:'*',component:NotFound}, 
    
  ]
})
