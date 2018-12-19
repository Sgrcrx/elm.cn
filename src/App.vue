<template>
	<el-container id="app">
		<el-aside width="220px">
			<admin-aside></admin-aside>
		</el-aside>
		<el-container>
			<el-header>
				<admin-header></admin-header>
				<tabs></tabs>
			</el-header>
			<el-main>
				<keep-alive>
					<router-view/>
				</keep-alive>
			</el-main>
			<el-footer>© 2018.12.14  陈融炫</el-footer>
		</el-container>
	</el-container>

</template>

<script>
	import AdminAside from '@/components/Aside'
	import AdminHeader from '@/components/Header'
	import Tabs from '@/components/Tabs.vue'
	export default {
		data() {
			return {};
		},
		methods: {},
		components: {
			AdminAside,
			AdminHeader,
			Tabs
		},

	};
</script>

<style>
	html,
	body,
	#app {
		margin: 0;
		height: 100%;
		width: 100%;
		background-color: #f2f2f2;
	}
	
	.el-header {
		height:100px!important;
		background-color: #FFFFFF;
	}
	
	.el-aside {
		background-color: #20222A;
	}
	
	.el-footer {
		background-color: #FFFFFF;
		line-height: 60px;
	}
</style>