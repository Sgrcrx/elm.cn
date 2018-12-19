<template>

	<el-tabs v-model="activePath" @tab-click="handleClick" @tab-remove="handleRemove">
		<el-tab-pane :name="tab.path" :key="tab.path" v-for="(tab,index) in tabs" :closable="index!=0">
			<span slot="label">
			 	<i :class="tab.icon"></i>&nbsp;<span v-text="tab.title"></span>
			</span>
		</el-tab-pane>
	</el-tabs>

</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	
	export default {
		data() {
			return {};
		},
		
		
		computed:{
//			...mapState(['tabs']),
			tabs(){
				return this.$store.state.tab.tabs;
			},
			activePath:{
				set(path){
					console.log(path);
					this.stitchTab(path);
				},
				get(){
					return this.$store.state.tab.activePath;
				}
			}
		},
		methods: {
			...mapMutations(['stitchTab','removeTab']),
			
			handleClick(tab) {
				console.log(tab);
				this.$router.push(this.activePath);
			},
			handleRemove(path) {
				this.removeTab(path);
				this.$router.push(this.activePath);
				
//				this.tabs = this.tabs.filter(item => item.path != name);
//				this.activeName = this.tabs[0].path;
//				this.$router.push(this.activeName);
				
			}
		}
	}
</script>

<style>

</style>