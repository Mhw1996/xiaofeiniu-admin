import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 注册elementUI插件
Vue.use(ElementUI)
import axios from 'axios'
Vue.prototype.$axios=axios //把axios设置为所有vue组件实例的成员属性,以后可以使用this.$axios使用异步请求的功能

//全局过滤器
Vue.filter('date',(val)=>{
  // 把bigint 转化为yyy-mm-dd
  var date=new Date(val)
  var yy=date.getFullYear();
  var mm=date.getMonth()+1;
  var dd=date.getDate();
  mm=mm>9?mm:'0'+mm;
  dd=dd>9?dd:'0'+dd;
  return yy+'-'+mm+'-'+dd
})
Vue.filter('datetime',(val)=>{
  // 把bigint转换为yyy-mm-dd hh:mm:ss
  var date=new Date(val)
  var yy=date.getFullYear();
  var mm=date.getMonth()+1;
  var dd=date.getDate();
  var hh=date.getHours();
  var mi=date.getMinutes();
  var ss=date.getSeconds();  
  mm=mm>9?mm:'0'+mm;
  dd=dd>9?dd:'0'+dd;
  hh=hh>9?hh:'0'+hh;
  mi=mi>9?mi:'0'+mi;
  ss=ss>9?ss:'0'+ss;
  return yy+'-'+mm+'-'+dd+' '+hh+':'+mi+':'+ss
})
Vue.filter('currency',(val)=>{
  // 把int转化为￥xx.yy
  return '￥'+val.toFixed(2) 
})

Vue.filter("tableStatus",(val)=>{
  if(val==1) return "空闲"
  else if(val==2) return "预定"
  else if(val==3) return "占用"
  else return "其他"
})

Vue.config.productionTip = false
// 全局的跟组件
new Vue({
  router,
  store,              //仓库，存储，指定当前项目唯一的Vuex存储仓库对象，其中保存着可供所有组件共享的数据
  render: h => h(App) 
  //render渲染，==>根据App组件创建<App></App>元素挂在到#app内部；
  // (createElement)=>{return createElement(App)}
}).$mount('#app')
