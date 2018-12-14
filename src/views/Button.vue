<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>button 按钮</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>

		<h1>尺寸</h1>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button size="medium">中等按钮</el-button>
			<el-button size="small">小型按钮</el-button>
			<el-button size="mini">超小按钮</el-button>
		</el-row>
		<el-row>
			<el-button round>默认按钮</el-button>
			<el-button size="medium" round>中等按钮</el-button>
			<el-button size="small" round>小型按钮</el-button>
			<el-button size="mini" round>超小按钮</el-button>
		</el-row>
		<el-row>
			<el-button :loading="loading">加载效果</el-button>
			<el-button type="primary" @click="loading = !loading;">切换</el-button>
		</el-row>
		<el-row>
			<h1>按钮组</h1>
			<el-button-group>
				<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
				<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
			</el-button-group>
			<el-button-group>
				<el-button type="primary" icon="el-icon-edit"></el-button>
				<el-button type="primary" icon="el-icon-share"></el-button>
				<el-button type="primary" icon="el-icon-delete"></el-button>
			</el-button-group>
		</el-row>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary" icon="el-icon-edit">主要按钮</el-button>
			<el-button type="success" icon="el-icon-edit">成功按钮</el-button>
			<el-button type="info" icon="el-icon-edit">信息按钮</el-button>
			<el-button type="warning" icon="el-icon-edit">警告按钮</el-button>
			<el-button type="danger" icon="el-icon-edit">危险按钮</el-button>
		</el-row>
		<el-row>
			<el-button @click="flag=!flag;">启用/禁用</el-button>
			<el-button type="primary" icon="fa fa-user" :disabled="flag"> 主要按钮</el-button>
			<el-button type="success" icon="fa fa-shopping-cart" :disabled="flag"> 成功按钮</el-button>
			<el-button type="info" icon="el-icon-edit" :disabled="flag">信息按钮</el-button>
			<el-button type="warning" icon="el-icon-edit" :disabled="flag">警告按钮</el-button>
			<el-button type="danger" icon="el-icon-edit" :disabled="flag">危险按钮</el-button>
			<el-button type="text">文字按钮</el-button>
			<el-button type="text" disabled>文字按钮</el-button>
		</el-row>
		<el-row>
			<el-button plain>朴素按钮</el-button>
			<el-button type="primary" plain>主要按钮</el-button>
			<el-button type="success" plain>成功按钮</el-button>
			<el-button type="info" plain>信息按钮</el-button>
			<el-button type="warning" plain>警告按钮</el-button>
			<el-button type="danger" plain>危险按钮</el-button>
		</el-row>

		<el-row>
			<el-button round>圆角按钮</el-button>
			<el-button type="primary" round>主要按钮</el-button>
			<el-button type="success" round>成功按钮</el-button>
			<el-button type="info" round>信息按钮</el-button>
			<el-button type="warning" round>警告按钮</el-button>
			<el-button type="danger" round>危险按钮</el-button>
		</el-row>

		<el-row>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="primary" icon="el-icon-edit" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="info" icon="el-icon-message" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</el-row>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				flag: false,
				loading: true
			};
		},
		methods: {}
	}
</script>

<style scoped="scoped">
button{
	margin: 10px;
}
</style>