<template>

	<el-tabs v-model="activeName" @tab-click="handleClick" @tab-remove="handleRemove">
		<el-tab-pane :name="tab.path" :key="index" v-for="(tab,index) in tabs" :closable="index!=0">
			<span slot="label">
			 	<i :class="tab.icon"></i>&nbsp;<span v-text="tab.label"></span>
			</span>
		</el-tab-pane>
	</el-tabs>

</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
					label: '首页',
					path: '/home',
					icon: 'fa fa-home'
				}, {
					label: '布局',
					path: '/layout',
					icon: 'fa fa-home'
				}, {
					label: '容器',
					path: '/container',
					icon: 'fa fa-home'
				}, {
					label: '图标',
					path: '/icon',
					icon: 'fa fa-home'
				}],
				activeName: '/home'
			};
		},
		methods: {
			handleClick(tab) {
				console.log(tab);
				this.$router.push(this.activeName);
			},
			handleRemove(name) {
				this.tabs = this.tabs.filter(item => item.path != name);
				this.activeName = this.tabs[0].path;
				this.$router.push(this.activeName);
			}
		}
	}
</script>

<style>

</style>