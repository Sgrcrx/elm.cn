<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>学生成绩</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-table :data="leaves" style="width: 100%" v-loading='loading'>
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="partment" label="部门"></el-table-column>
			<el-table-column prop="region" label="事由"></el-table-column>

			<!---->
			<el-table-column prop="time" label="时间">
				<template slot-scope='scope'>
					{{timeFrmate(scope.row.start)}} 到 {{scope.row.end | timeFrmate}}
				</template>
			</el-table-column>
			<!---->

			<el-table-column prop="other" label="情急联系人"></el-table-column>
			<el-table-column prop="other_phone" label="情急电话"></el-table-column>
			<el-table-column prop="leave_desc" label="备注"></el-table-column>

			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="dialogVisible=true;">同意</el-button>
					<el-button size="mini" type="danger">驳回</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!---->
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[2, 5, 10, 20, 30, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>

		<!---->
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
			<span>这是一段信息</span>
			<span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>

	</el-card>
</template>

<script>
	import axios from "axios";
	import qs from 'qs';
	export default {
		data() {
			return {
				dialogVisible: false,
				size: 2,
				total: 0,
				page: 1,
				leaves: [],
				loading: false
			};
		},
		methods: {
			
			timeFrmate(timestamp) {

			},
			handleSizeChange(s) {
				this.size = s;
				this.page = 1; //?
				this.getLeavesList(1); //?
			},
			handleCurrentChange(p) {
				this.page = p;
				this.getLeavesList(p);
			},
			getLeavesList(page) {
				this.loading = true;
				const url = "http://192.168.255.30:8888/index.php/Index/Index/getLeaveList"; //????
				axios.post(url, qs.stringify({
					page: page,
					size: this.size
				})).then(res => {
					this.loading = false;
					this.leaves = res.data.list;
					this.total = res.data.total;
				}).catch(err => {
					this.loading = false;
				})
			},
			created() {
				this.getLeavesList(1);
			},
		}
	}
</script>

<style>
	.el-pagination {
		margin-top: 20px;
		text-align: center;
	}
	button{
		/*background-color: salmon;*/
	}
</style>