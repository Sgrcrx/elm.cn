<template>
	<el-table :data="scores" border style="width: 100%">
		<el-table-column fixed type="index" width="50"></el-table-column>
		<el-table-column prop="name" label="姓名" width="120"></el-table-column>
		<el-table-column prop="scr.Chinese" label="语文" width="110"></el-table-column>
		<el-table-column prop="scr.Maths" label="数学" width="110"></el-table-column>
		<el-table-column prop="scr.Englich" label="英语" width="110"></el-table-column>
		<el-table-column prop="scr.Physics" label="物理" width="110"></el-table-column>
		<el-table-column prop="scr.Chemistry" label="化学" width="110"></el-table-column>
		<el-table-column prop="scr.Biology" label="生物" width="110"></el-table-column>
		<el-table-column  :alls='alls' label="总分" width="120"></el-table-column>
		<el-table-column fixed="right" label="操作" width="120">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
				<el-button type="text" size="small">确定</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {

		data() {
			return {
				scores: [{
					id: 1,
					name: '赵小明',
					scr: {
						Chinese: 90,
						Maths: 87,
						Englich: 94,
						Physics: 88,
						Chemistry: 83,
						Biology: 91,
					}
				}]
			}
		},
		methods: {
			handleClick(row) {
				console.log(row);
			},
			alls(val) {
				var sum =0;
				var chinese = scores.scr.Chinese.value;
				console.log(chinese);
				var maths = scores.scr.Maths.value;
				var englich = scores.scr.Englich.value;
				var physics = scores.scr.Physics.value;
				var chemistry = Scores.scr.Chemistry.value;
				var biology = scores.scr.Biology.value;
				for(var i = 0; i < scores.scr.length; i++) {
					sum += chinese+maths+englich+physics+chemistry+biology;
					console.log(val);
				}
			}
		},
		created(){
			
		}
	}
</script>

<style>

</style>