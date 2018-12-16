<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>学生成绩</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
	<el-table :data="scores" border style="width: 100%">
		<el-table-column fixed type="index" width="50"></el-table-column>
		<el-table-column prop="name" label="姓名" width="120"></el-table-column>
		<el-table-column prop="Chinese" label="语文" width="110"></el-table-column>
		<el-table-column prop="Maths" label="数学" width="110"></el-table-column>
		<el-table-column prop="Englich" label="英语" width="110"></el-table-column>
		<el-table-column prop="Physics" label="物理" width="110"></el-table-column>
		<el-table-column prop="Chemistry" label="化学" width="110"></el-table-column>
		<el-table-column prop="Biology" label="生物" width="110"></el-table-column>
		<!--<el-table-column :alls='alls' label="总分" width="120"></el-table-column>-->
		<el-table-column fixed="right" label="操作" width="120">
			<template slot-scope="scope">
				<el-button @click="dialogVisible=true" type="text" size="small">删除</el-button>
				<el-button type="text" size="small">确定</el-button>
			</template>
		</el-table-column>
	</el-table>
		
		<!--分页-->
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page" :page-sizes="[ 2, 5, 10, 20, 30, 40]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
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
	<!---->
	</el-card>
</template>

<script>
	export default {

		data() {
			return {
				dialogVisible: false,
				page: 1,
				size: 5,
				total: 100,
				scores: [{
					id: 1,
					name: '小明',
					Chinese: 90,
					Maths: 87,
					Englich: 94,
					Physics: 88,
					Chemistry: 83,
					Biology: 91,
				},{
					id: 2,
					name: '小花',
					Chinese: 90,
					Maths: 87,
					Englich: 94,
					Physics: 88,
					Chemistry: 83,
					Biology: 91,
				},{
					id: 3,
					name: '小猫',
					Chinese: 90,
					Maths: 87,
					Englich: 94,
					Physics: 88,
					Chemistry: 83,
					Biology: 91,
				},{
					id: 4,
					name: '小狗',
					Chinese: 90,
					Maths: 87,
					Englich: 94,
					Physics: 88,
					Chemistry: 83,
					Biology: 91,
				},{
					id: 5,
					name: '小兔',
					Chinese: 90,
					Maths: 87,
					Englich: 94,
					Physics: 88,
					Chemistry: 83,
					Biology: 91,
				},]
			}
		},
		methods: {
			handleSizeChange(s) {
				this.scores = this.getSocreList(s);
			},
			handleCurrentChange(p) {
				console.log(p);
				this.scores = this.getSocreList(this.size);
			},
			getSocreList(n) {
				let arr = [];
				let names = ['小明', '小红', '小花', '小李', '小张','小兔','小狗','小猫','小白','小黄','小狸'];
				for(let i = 0; i < n; i++) {
					let index = Math.floor(Math.random() * names.length);
					let s = {
						id: 1,
						name: names[index],
						Chinese: Math.ceil(Math.random() * 100),
						Maths: Math.ceil(Math.random() * 100),
						Englich: Math.ceil(Math.random() * 100),
						Physics: Math.ceil(Math.random() * 100),
						Chemistry: Math.ceil(Math.random() * 100),
						Biology: Math.ceil(Math.random() * 100),
					};
					arr.push(s);
				}
				return arr;
			}
		},
		created() {

		}
	}
</script>

<style scoped="scoped">
	.el-pagination{
		margin-top: 20px;
		text-align: center;
	}

</style>