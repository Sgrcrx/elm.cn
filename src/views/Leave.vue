<template>
	<el-card class="box-card">
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
		<div slot="header" class="clearfix" prop="names">
			<span>请假页-员工页</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<!--请假人与部门-->
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="请假人">
				<el-input v-model="formInline.user" placeholder="请假人"></el-input>
			</el-form-item>
			<el-form-item label="部门">
				<el-select v-model="formInline.region" placeholder="部门">
					<el-option label="web前端" value="a"></el-option>
					<el-option label="UI" value="b"></el-option>
					<el-option label="Js" value="c"></el-option>
					<el-option label="Ps" value="d"></el-option>
					<el-option label="Ai" value="e"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>

			</el-form-item>
		</el-form>
		<!--请假原因-->
		<h1 class="leave-name">请假原因</h1>
		<el-input class='leaves' type="textarea" autosize placeholder="请输入请假原因"></el-input>
		<!--请假下拉-->
		<el-select class='leaves-yn' v-model="value" placeholder="请选择">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		</el-form-item>
		<!--备注-->
		<h1 class="leave-name">备注</h1>
		<el-input class='leaves' type="textarea" autosize placeholder="请输入备注内容"></el-input>
		<!--紧急联系方式-->
		
			<el-form-item label="联系电话" prop="age" :rules="[
      { required: true, message: '联系电话不能为空'},
      { type: 'number', message: '联系电话必须为数字值'}
    ]">
				<el-input class='tels' type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
				<el-button @click="resetForm('numberValidateForm')">重置</el-button>
			</el-form-item>
		</el-form>
		<!--end-->
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				formInline: {
					user: '',
					region: '',
					region1: '',
				},
				options: [{
					value: '选项1',
					label: '感冒'
				}, {
					value: '选项2',
					label: '发烧'
				}, {
					value: '选项3',
					label: '生病'
				}, {
					value: '选项4',
					label: '结婚'
				}, {
					value: '选项5',
					label: '出差'
				}],
				value: '',
				numberValidateForm: {
					age: '',
					names:''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}

	}
</script>

<style scoped="scoped">
	.box-card{
		/*margin-left: 50px;*/
		padding: 0px 50px;
	}
	h1 {
		font-size: 16px;
		font-weight: normal;
		color: #666;
	}
	
	.leaves {
		min-width: 100px;
		max-width: 524px;
		display: block;
		margin-bottom: 20px;
	}
	
	.tel {
		min-width: 100px;
		max-width: 524px;
	}
	.tels{
		max-width: 424px;
	}
</style>