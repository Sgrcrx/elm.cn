<template>
	
		<el-tabs v-model="tabsValue" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane :keys="item.keys" v-for="(item, index) in tabs" :label="item.title" :name="item.name">
				<span slot="label">
					<i :class="item.icon"></i>
					<span v-text="item.label"></span>
				</span>
			</el-tab-pane>
		</el-tabs>

	
</template>

<script>
	export default {
		data() {
			return {
				tabsValue: '2',
				tabs: [{
					title: 'Tab 1',
					keys: '1',
					name:'首页',
					content: 'Tab 1 content'
				}, {
					title: 'Tab 2',
					keys: '2',
					content: 'Tab 2 content'
				}],
				tabIndex: 2
			}
		},
		methods: {
			handleTabsEdit(targetName, action) {
				if(action === 'add') {
					let newTabName = ++this.tabIndex + '';
					this.tabs.push({
						title: 'New Tab',
						name: newTabName,
						content: 'New Tab content'
					});
					this.tabsValue = newTabName;
				}
				if(action === 'remove') {
					let tabs = this.tabs;
					let activeName = this.tabsValue;
					if(activeName === targetName) {
						tabs.forEach((tab, index) => {
							if(tab.name === targetName) {
								let nextTab = tabs[index + 1] || tabs[index - 1];
								if(nextTab) {
									activeName = nextTab.name;
								}
							}
						});
					}

					this.tabsValue = activeName;
					this.tabs = tabs.filter(tab => tab.name !== targetName);
				}
			}
		}
	}
</script>

<style>

</style>