<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-form :model="leave" :rules="rules" ref="leave" label-width="100px" class="demo-ruleForm">

			<el-row :gutter="10">
				<el-col :span="12">
					<el-form-item label="请假人" prop="name">
						<el-input v-model="leave.name"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">

					<el-form-item label="事由" prop="region">
						<el-select v-model="leave.region" placeholder="请选择事由" style="width:100%">
							<el-option label="事假" value="事假"></el-option>
							<el-option label="病假" value="病假"></el-option>
							<el-option label="婚假" value="婚假"></el-option>
							<el-option label="产假" value="产假"></el-option>
							<el-option label="丧假" value="丧假"></el-option>
							<el-option label="年假" value="年假"></el-option>
							<el-option label="放飞自我" value="放飞自我"></el-option>
							<el-option label="其他" value="其他"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

			</el-row>
	
	
			<el-row :gutter="10">
				<el-col :span="12">

					<el-form-item label="部门" prop="partment">
						<el-select v-model="leave.partment" placeholder="请选择部门" style="width:100%">
							<el-option label="Web部" value="Web部"></el-option>
							<el-option label="Js部" value="Js部"></el-option>
							<el-option label="Ps部" value="Ps部"></el-option>
							<el-option label="Ai部" value="Ai部"></el-option>
							<el-option label="Php部" value="Php部"></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="12">

					<el-form-item label="时间">
						<el-date-picker v-model="time" style="width:100%" value-format="timestamp" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
						</el-date-picker>
					</el-form-item>
				</el-col>

			</el-row>

			<el-row :gutter="10">
				<el-col :span="12">
					<el-form-item label="情急联系人" prop="other">
						<el-input v-model="leave.other"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="情急电话" prop="other_phone">
						<el-input v-model="leave.other_phone"></el-input>
					</el-form-item>
				</el-col>

			</el-row>
			<el-form-item label="说明" prop="leave_desc">
				<el-input type="textarea" v-model="leave.leave_desc" placeholder="请备注请假说明"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm('leave')" :loading="loading">确认</el-button>
				<el-button @click="resetForm('leave')">重置</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import axios from"axios";
	import qs from 'qs';
	export default {
		data() {
			return {
				time: [],
				leave: {
					name: '',
					partment: '',
					region: '',
					start: 0,
					end: 0,
					leave_desc: '',
					other: '',
					other_phone: ''
				},
				loading:false,
				rules: {
					name: [{
							required: true,
							message: '请输入请假人',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 10,
							message: '长度在 2 到 10 个字符',
							trigger: 'blur'
						}
					],
				}
			};
		},
		methods: {

			addLeave() {
				this.loading = true;
				let url = "http://192.168.255.30:8888/index.php/Index/Index/addLeave";
				this.leave.start = this.time[0] / 1000;
				this.leave.end = this.time[1] / 1000;
				axios.post(url, qs.stringify({
					data: this.leave
				})).then(res => {
					if(res.data.code > 0) {
						this.$notify({
							title: '成功',
							message: res.data.msg,
							type: 'success'
						});
					} else {
						this.$notify({
							title: '失败',
							message: res.data.msg,
							type: 'error'
						});
					}
					this.loading = false;
				}).catch(err => {
					this.$notify({
						title: '错误',
						message: '服务器错误！',
						type: 'error'
					});
					this.loading = false;
				});
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						console.log("通过验证");
						this.addLeave();
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
button{
	text-align: center;
}
</style>