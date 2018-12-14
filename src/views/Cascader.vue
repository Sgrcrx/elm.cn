<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>cascader -级联选择器</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<div class="block">
			<el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange">
			</el-cascader>
		</div>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				options:[],
				selectedOptions2:[]
			};
		},
		methods: {
			handleChange(val){
				 console.log(val);
			}
		},created(){
			this.options = require('../assets/region.json');
		}
	}
</script>

<style>

</style>