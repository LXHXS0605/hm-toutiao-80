import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
// 入口文件 负责依赖资源的全局导入 创建vue根实例
