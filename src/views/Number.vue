<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>卡片名称</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<!--number-->
		<el-input-number v-model="num1" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number><br />

		

	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				num1: 1,
				 num9: 1,
				 handleChange:[]
			};
		},
		methods: {
			
		},
		methods: {}
	}
</script>

<style scoped="scoped">

</style>