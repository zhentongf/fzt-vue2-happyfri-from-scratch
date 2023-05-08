// rem 布局
// css 的单位 rem 是相对根元素 html 的字体大小
(function (doc, win) {
    // docEl 就是 html 元素
    var docEl = doc.documentElement
    // chrome 移动端有 orientationchange 事件，就用这个
    // chrome 电脑端没有，就用 resize 事件
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var recalc = function () {
        var clientWidth = docEl.clientWidth
        if(!clientWidth) return
        docEl.style.fontSize = (clientWidth / 16) + 'px'
    }
    // addEventListener 的第三个参数相当于
    // { capture: false, once: false, passive: false }
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)