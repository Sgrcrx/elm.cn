<template>
	<el-menu default-active="0" class="el-menu-vertical-demo" @open="open" @close="close" @select="select" background-color="#20222A" text-color="#fff" active-text-color="#ffd04b">
		<el-submenu :index="i+''" v-for="(item,i) in nav">
			<template slot="title">
				<i :class="item.icon"></i>
				<span v-text="item.title"></span>
			</template>
			<el-menu-item-group>
				<el-menu-item :index="sub.path" v-for="(sub,j) in nav[i].sub" v-text="sub.title"></el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default{
		data() {
			return {
				nav:[]
			};

		},
		methods: {
			open(key, keyPath) {
				console.log(key, keyPath);
			},
			close(key, keyPath) {
				console.log(key, keyPath);
			},
			
			getTab(path){
				for (let i = 0; i<this.nav.length; i++) {
					for (let j = 0; j<this.nav[i].sub.length; j++) {
						if(this.nav[i].sub[j].path==path){
							return this.nav[i].sub[j];
						}
					}
				}
				return false;
			},
			
			...mapMutations(['addTab']),
			select( index, indexPath){
				const tab = this.getTab(index)
				if(tab){
					this.addTab(tab);
					this.$router.push(index);
//					console.log(index);
//					console.log(indexPath);
				}
			},
			
		},created(){
			this.nav = require("../assets/admin.json")
		}
	}
</script>

<style>
	
</style>