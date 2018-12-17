import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//fa 字体包
import "./assets/css/font-awesome.min.css";

// 设置服务器地址
//Vue.prototype.serveRoot = "http://192.168.255.30:8888";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
