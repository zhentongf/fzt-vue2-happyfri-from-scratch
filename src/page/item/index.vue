<template>
    <div>
      <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
import { mapState } from 'vuex'

export default {
	name: 'item',
  	components: {
   		itemcontainer
  	},
	computed: mapState([
		'timer'
	]),
  	created(){
        // 进入题目页面，开始计时
  		this.$store.commit('REMBER_TIME');
  	},
	// 新版的 Vue 已经把 destroyed 改成了 unmounted, 但这里不支持 unmounted
	destroyed() {
		// 销毁页面，取消计时
		clearInterval(this.timer)
	}
}
</script>

<style lang="less"></style>