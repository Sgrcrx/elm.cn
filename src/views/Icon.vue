<template>
	<el-card class="box-card icon-page">
		<div slot="header" class="clearfix">
			<span>Icon 图标</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<span class="icon-demo" v-for="(item,index) in icons">
			<i :class="item"></i><br />
			<span class="icon-name" v-text="item"></span>
		</span>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				icons: ["el-icon-info",
					"el-icon-error",
					"el-icon-success",
					"el-icon-warning",
					"el-icon-question",
					"el-icon-back",
					"el-icon-arrow-left",
					"el-icon-arrow-down",
					"el-icon-arrow-right",
					"el-icon-arrow-up",
					"el-icon-caret-left",
					"el-icon-caret-bottom",
					"el-icon-caret-top",
					"el-icon-caret-right",
					"el-icon-d-arrow-left",
					"el-icon-d-arrow-right",
					"el-icon-minus",
					"el-icon-plus",
					"el-icon-remove",
					"el-icon-circle-plus",
					"el-icon-remove-outline",
					"el-icon-circle-plus-outline",
					"el-icon-close",
					"el-icon-check",
					"el-icon-circle-close",
					"el-icon-circle-check",
					"el-icon-circle-close-outline",
					"el-icon-circle-check-outline",
					"el-icon-zoom-out",
					"el-icon-zoom-in",
					"el-icon-d-caret",
					"el-icon-sort",
					"el-icon-sort-down",
					"el-icon-sort-up",
					"el-icon-tickets",
					"el-icon-document",
					"el-icon-goods",
					"el-icon-sold-out",
					"el-icon-news",
					"el-icon-message",
					"el-icon-date",
					"el-icon-printer",
					"el-icon-time",
					"el-icon-bell",
					"el-icon-mobile-phone",
					"el-icon-service",
					"el-icon-view",
					"el-icon-menu",
					"el-icon-more",
					"el-icon-more-outline",
					"el-icon-star-on",
					"el-icon-star-off",
					"el-icon-location",
					"el-icon-location-outline",
					"el-icon-phone",
					"el-icon-phone-outline",
					"el-icon-picture",
					"el-icon-picture-outline",
					"el-icon-delete",
					"el-icon-search",
					"el-icon-edit",
					"el-icon-edit-outline",
					"el-icon-rank",
					"el-icon-refresh",
					"el-icon-share",
					"el-icon-setting",
					"el-icon-upload",
					"el-icon-upload2",
					"el-icon-download",
					"el-icon-loading"
				],
			};
		},
		methods: {}
	}
</script>

<style>
	.icon-page i {
		font-size: 20px;
		margin: 5px;
	}
	
	.icon-demo {
		text-align: center;
		display: inline-block;
		width: 150px;
		background-color: honeydew;
		margin: 5px;
	}
	
	.icon-page .icon-name {
		text-align: center;
	}
</style>