import ajax from '../config/ajax'

export default {
    // 当花括号出现在左值中的时候，他就是 解构运算符。
    addNum({ commit, state }, id) {
        // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
        commit('REMBER_ANSWER', id)
        if(state.itemNum < state.itemDetail.length) {
            commit('ADD_ITEMNUM', 1)
        }
    },
    // 初始化信息
    initializeData({ commit }) {
        commit('INITIALIZE_DATA')
    }
}