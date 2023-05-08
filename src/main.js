import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'

// 我推测 查找过程
// 先查找文件 common 找不到
// 再查找文件 common.js 找不到
// 再查找文件 common.css 找不到
// 再查找文件 common.less 找到了
import './style/common'
// 两种方法相等
// require('./style/common')
import './config/rem'

Vue.use(VueRouter)
const router  = new VueRouter({
    routes
})

new Vue({
    router,
    store
}).$mount('#app')