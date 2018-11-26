import Vue from 'vue';//引入第三方模块或组件，只写名字即可，相当于node中的 var Vue=require('vue')
import App from './App.vue';//引入自定义组价，需要写路径,相当于node中的 var App=require('./App.vue')
import 'bootstrap/dist/css/bootstrap.css';
import './assets/index.css';
import router from './routes/router.js'
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
