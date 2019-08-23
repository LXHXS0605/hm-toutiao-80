import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import '@/styles/index.less'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  // el: '#app',
  render: h => h(App)
}).$mount('#app')
// 入口文件 负责依赖资源的全局导入 创建vue根实例
