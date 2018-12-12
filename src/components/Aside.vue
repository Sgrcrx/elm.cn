<template>
	<el-menu default-active="0" class="el-menu-vertical-demo" @select='select' @open="open" @close="close" background-color="#20222A" text-color="#fff" active-text-color="#ffd04b">
				<el-submenu :index="i+''" v-for='(item,i) in nav'>
					<template slot="title">
						<i :class="item.icon"></i>
						<span v-text="item.title"></span>
					</template>
					<el-menu-item-group>
						<el-menu-item :index="sub.path" v-for='(sub,j) in nav[i].sub' v-text='sub.title'></el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
</template>

<script>
	export default{
		data() {
			return {
				nav:[{
					title: 'basic',
					icon:'el-icon-location',
					sub: [{
						title: 'layout布局',
						path: '/layout'
					}, {
						title: 'Container 容器',
						path: '/container'
					}]
				}, {
					title: 'form',
					icon:'el-icon-location',
					sub: [{
						title:'me',
						path:'/me'
					}]
				}, {
					title: 'Data',
					icon:'el-icon-location',
					sub: [{
						title:'other',
						path:'/other'
					}]
				}]
			};

		},
		methods: {
			open(key, keyPath) {
				console.log(key, keyPath);
			},
			close(key, keyPath) {
				console.log(key, keyPath);
			},
			select( index, indexPath){
				console.log(index);
				console.log(indexPath);
				this.$router.push(index);
			}
		},
	}
</script>

<style>
	
</style>