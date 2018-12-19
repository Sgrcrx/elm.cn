export default{
	state:{
		tabs: [{
					title: '首页',
					path: '/',
					icon: 'fa fa-home'
				}],
				activePath: '/'
	},
	getters:{},
	// 只能处理同步操作
	mutations:{
		stitchTab(state,path){
			this.state.activePath = path;
		},
		//下面这段话？？		
		addTab(state,tab){
			// 已经存在直接切换过去
			for (let i=0; i<state.tabs.length; i++) {
				if (state.tabs[i].path == tab.path){
					state.activePath = tab.path;
					return;
				}
			}
				// 没有存在，则增加一个tab
				console.log(tab);
				state.tabs.push(tab);
				state.activePath = tab.path;
		},
		//end
		removeTab(state,path){
			state.tabs = state.tabs.filter(item=>item.path!=path);
			if(state.activePath==path){
				state.activePath = '/';
			}
		}
	},
	// 异步处理
	actions:{
		
	}
}
