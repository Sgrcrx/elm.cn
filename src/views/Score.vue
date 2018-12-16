<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>学生成绩</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<el-table :data="scores" style="width: 100%">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" label="姓名"></el-table-column>
			<el-table-column prop="chinese" label="语文"></el-table-column>
			<el-table-column prop="math" label="数学"></el-table-column>
			<el-table-column prop="english" label="英语"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="dialogVisible=true;">编辑</el-button>
					<el-button size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[10, 20, 30, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>
		
		
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%">
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
		
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible:false,
				size: 10,
				total: 100,
				page: 1,
				scores: [{
					id: 1,
					name: '小明',
					chinese: 100,
					math: 90,
					english: 98
				}, {
					id: 1,
					name: '小明',
					chinese: 100,
					math: 90,
					english: 98
				}, {
					id: 1,
					name: '小明',
					chinese: 100,
					math: 90,
					english: 98
				}, {
					id: 1,
					name: '小明',
					chinese: 100,
					math: 90,
					english: 98
				}, {
					id: 1,
					name: '小明',
					chinese: 100,
					math: 90,
					english: 98
				}, {
					id: 1,
					name: '小明',
					chinese: 100,
					math: 90,
					english: 98
				}]
			};
		},
		methods: {
			handleSizeChange(s) {
				this.scores =  this.getSocreList(s);
			},
			handleCurrentChange(p) {
				console.log(p);
				this.scores =  this.getSocreList(this.size);
			},
			getSocreList(n) {
				let arr = [];
				let names = ['小明','小红','小花','小李','小张'];
				for(let i = 0; i < n; i++) {
					let index = Math.floor(Math.random()*names.length);
					let s = {
						id: 1,
						name: names[index],
						chinese: Math.ceil( Math.random()*100),
						math: Math.ceil( Math.random()*100),
						english: Math.ceil( Math.random()*100)
					};
					arr.push(s);
				}
				return arr;
			}
		}
	}
</script>

<style>
	.el-pagination{
		margin-top: 20px;
		text-align: center;
	}

</style>