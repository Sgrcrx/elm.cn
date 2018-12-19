import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		count: 0,
		counts:0,
		count1: 5,
		count2: 100,
		msg: 'hello',
		arr: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
		tabs: [{
					title: '首页',
					path: '/',
					icon: 'fa fa-home'
				}],
				activePath: '/'
  },
  getters:{
  	odd(state){
  		return state.arr.filter(item=>item%2!=0);
  	},
  	even(state){
  		return state.arr.filter(item=>item%2==0);
  	}
  },
  mutations: {
		add(state,n){
			state.count+=n;
		},
		increment(state){
			state.counts++
		},
		jian(state){
			state.count1--
		},
		minus(state,m){
			state.count2-=m
		},
		add(state,n){
			this.state.count+=n;
		},
		reduce(state,n){
			this.state.count-=n;
		},
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
  actions: {
		addAction(context){
			console.log("start action");
			setTimeout(()=>{
				console.log('actioning');
				content.commit('add',100);
			},1000);
			console.log('end action');
		}
  }
})
