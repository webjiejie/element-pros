import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import elementPros from '../packages';
// 代码高亮复制
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(elementPros);

Vue.directive('highlight', el => { // 代码高亮复制
  let blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
