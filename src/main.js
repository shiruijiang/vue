import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Header from './components/header.vue'
import Vswiper from './components/v-swiper.vue'
import 'swiper/dist/css/swiper.min.css'
import Vrouter from './components/v-router.vue'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('Header',Header)   //全局注册组件
Vue.component('Vswiper',Vswiper)
Vue.component('Vrouter',Vrouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
