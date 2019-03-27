import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 多组件所共用的公共存储仓库
export default new Vuex.Store({
  // 公共数据读取方法：this.$store.state.adminName
  // 公共数据读取方法：this.$store.state.globalSettings
  state: {  //当前数据的状态，类似与组建对象的data属性
    adminName:"",  //当前登录的管理猿名字；
    globalSettings:{ //项目的全局设置信息
      apiUrl:"http://127.0.0.1:8090"   //初始的默认值

    }
  },
/*
  HTTP是没有状态的，有哪些方案，可以在不同的页面间记录数据共享数据？？
  （1）客户端(浏览器)存储
      1),cookie本质是：键值对的形式保存在浏览器中，可以存储在内存中也可以存储在磁盘中；可以指定过期的时间；兼容性好,保存方式：document.cookie(),只能存储字符数据，不能存储图片，视频，音频，且浏览器有大小的限制；不同版本之间的存储大小不同（1K,2K,5K,较小）， 且后续同一服务器上所有的访问都会上传之间的Cookie数据，
      2）H5 webStorage:把其当成数组 (只能存储安全级别比较低的数据)
          1）window.LocalStorage.setItem('adminName','root')
              window.LocalStorage.getItem('adminName')
              window.LocalStorage.items('adminName')
              items能够遍历出所有的LocalStorage中的值             
          2）window.SessionStorage.setItem('adminName','root') 
              修改adminName的值为root,
             window.SessionStorage.getItem('adminName')
              获取SessionStorage中的adminName的值；
             window.SessionStorage.remove('adminName')   
              移除window.SessionStorage中的adminName   
          3）两者的区别：
              window.SessionStorage：存储在浏览器的内存中 
              window.LocalStorage ：存储在磁盘文件中；   
          4）H5新特性：老IE不兼容
             好处： 最大可以到（8MB）大小限制比较松，后续的请求不会上传数据，本身没有上传服务器的机制；只能用Ajax等技术上传；
          5）Web SQL：存在浏览器的兼容性的问题
          6）IndexedDB：
  （2）服务器端存储：适合于安全要求级别高的数据或核心业务数据
          1）数据库：使用恰当的后台语言提交SQL访问数据库
          2）session:把当前浏览器对应的私有数据存储在服务器的内存中/文件系统/数据库中，类似银行中的保管箱；
          
*/ 
  
  // sessionStrage获取数据和修改数据的方法；
  // sessionStorage.get(K)
  // sessionStorage.set(K,v)

  // 公共数据修改方法：this.$store.commit('setAdminName',boss)
  // 公共数据修改方法：this.$store.commit('setGlobalSettings',{...})
  // 触发的事件时commit,事件名叫：setAdminName,boss就是value
  mutations: { //进化，转化，控制着数据的进化，修改数据(类似于对象中的methods)--用mutations修改数据可以保证数据的响应式
    setAdminName(state,value){
      state.adminName=value; 
    },
    setGlobalSettings(state,value){
      state.globalSettings=value; 
    }
  },
  actions: {

  }
})
