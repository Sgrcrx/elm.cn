import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//fa 字体包
import "./assets/css/font-awesome.min.css";

// 设置服务器地址
//Vue.prototype.serveRoot = "http://192.168.255.30:8888";
import axios from "axios";
import qs from "qs";

//vue 格式话时间的过滤函数
Vue.filter('timeFrmate',timestamp=>{
	
	let time = new Date(timestamp *1000);
	let y = time.getFullYear();
	let M = time.getMonth();
	let d = time.getDate();
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	
	//显示格式化
	h = h < 10 ? ('0' + h) : h;
	m = m < 10 ? ('0'+ m) : m;
	s = s < 10 ?('0' + s) : s;
	
	return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')