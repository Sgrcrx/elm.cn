<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>请假页-领导页</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<!--start-->
		<el-table :data="tables" border style="width: 100%">
			<el-table-column type="index" width="50"></el-table-column>
			<el-table-column prop="name" label="姓名" width="100"></el-table-column>
			<el-table-column prop="because" label="原因" width="120"></el-table-column>
			<el-table-column prop="date" label="开始时间" width="120"></el-table-column>
			<el-table-column prop="endData" label="结束时间" width="120"></el-table-column>
			<el-table-column prop="ads" label="驳回理由" width="340"></el-table-column>
			<el-table-column prop="beizhu" label="备注" width="100"></el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="dialogVisible=true;" type="text" size="small">同意</el-button>
					<el-button type="text" size="small">驳回</el-button>
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
		<!--end-->
	</el-card>
</template>

<script>
	export default {

		data() {
			return {
				dialogVisible: false,
				size: 5,
				total: 100,
				page: 1,
				tables: [{
					date: '2016-05-03',
					name: '王小虎',
					because: '生病',
					endData: '2016-05-04',
					ads: '我就是不同意！',
					beizhu: "无"
				}, {
					date: '2016-05-02',
					name: '王小猫',
					because: '感冒',
					endData: '2016-05-08',
					ads: '世界那么大，等我想一想！',
					beizhu: "无"
				}, {
					date: '2016-05-04',
					name: '王小狗',
					because: '发炎',
					endData: '2016-05-10',
					ads: '宝宝还没出生，急什么？！',
					beizhu: "无"
				}, {
					date: '2016-05-01',
					name: '王小兔',
					because: '发热',
					endData: '2016-08-03',
					ads: '兔兔那么可爱，你竟然想请假？！',
					beizhu: "无"
				}, {
					date: '2014-09-21',
					name: '王小哈',
					because: '二哈？',
					endData: '2015-01-02',
					ads: '啊哈？！',
					beizhu: "无"
				}]
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
				let names = ['小明', '小红', '小花', '小李', '小张', '王小兔', '王小狗', '王小猫', '王小虎','王小哈'];
				let becauses = ['感冒', '发热', '发炎', '生病', '出差', '看电影', '逛街', '世界那么大，我想去看看'];
				let adss = ['兔兔那么可爱，你竟然想请假？！', '宝宝还没出生，急什么？！', '世界那么大，等我想一想！', '我就是不同意！', '赶紧去出差！！', '看电影看个毛啊！', '没事逛啥街啊！', '世界那么大，赶紧回来工作！'];
				let dates = ['2016-05-01', '2016-08-01', '2016-07-04', '2016-11-08', '2016-02-15'];
				let endDatas = ['2016-01-01', '2018-08-01', '2019-07-04', '2118-11-08', '2216-02-15'];

				for(let i = 0; i < n; i++) {
					let index = Math.floor(Math.random() * names.length);
					let indexs = Math.floor(Math.random() * becauses.length);
					let indexss = Math.floor(Math.random() * ads.length);
					let indexsss = Math.floor(Math.random() * dates.length);
					let indexssss = Math.floor(Math.random() * endDatas.length);
					let s = {
						id: 1,
						name: names[index],
						because: becauses[indexs],
						ads: adss[indexss],
						date: dates[indexsss],
						endData: endDatas[indexssss],
						beizhu: '无'

					};
					console.log(s);
					arr.push(s);
				}
				return arr;
			}
		}
	}
</script>

<style scoped="scoped">

</style>