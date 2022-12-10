import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
//图片懒加载依赖引入
import VueLazyload from 'vue-lazyload'
// or with options
const loadimage = require('./assets/loading.gif')
// const errorimage = require('./assets/error.gif')

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: errorimage,
  loading: loadimage,
  attempt: 1
})
console.log(process.env, process.env.VUE_APP_BASE_API, process.env.VUE_APP_TITLE, 666);

Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
