import App from '../App'

// vue 路由懒加载的三种写法
// 第一种 es6 写法报错。
// const Home = () => import('../page/home') 

export default [{
    path: '/',
    component: App,
    // resolve 大概是一个回调函数
    children: [{
        path: '',
        component: resolve => require(['../page/home'], resolve)
    }, {
        path: '/item',
        // 方法二 vue 异步组件 传入参数 resolve
        component: resolve => require(['../page/item'], resolve)
    }, {
        path: '/score',
        // 方法三 webpack 的 require.ensure
        component: resolve => require.ensure([], () => resolve(require('../page/score')), 'score')
    }]
}]