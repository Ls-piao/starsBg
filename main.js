// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  'animate.css'
import myCharts from './charts/index.js'
Vue.use(myCharts)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
export default vue