import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        // 暂时不知道参数 r 是什么意思
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]