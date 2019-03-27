<template>
  <div class="about">
    <el-card class="xfn-login-card">
      <!-- 插槽slot写在插槽的内容将自动替换header头部,不写在slot中的插槽将显示在插槽的外部 -->
      <div slot="header">
        <span>管理员登录</span>
      </div> 
      <div>
        <el-form label-width="90px"> 
          <el-form-item label="管理员名:">
            <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
          </el-form-item> 

          <el-form-item label="管理员密码:">
            <el-input v-model="formData.apwd" type="password" placeholder="请输入管理员密码"></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-card>
  
  </div>
</template>

<script>
export default {
  data(){//普通组件的模型数据是函数返回值
    return{formData:{
      // 表单中用户输入的两个数据
      aname:'admin',
      apwd:'123456'
    }}
  },
  methods: {
    doLogin(){  //执行登录
      var url=this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
      // console.log(url)
      this.$axios.get(url).then((res)=>{
        // console.log(res.data)
        if(res.data.code==200){ //登陆成功
        // 将用户名存储在Vuex仓库中
        this.$store.commit('setAdminName',this.formData.aname)
          this.$router.push("/main")
        }else{ //登录失败
            this.$alert("用户名输入错误!!",'登录失败',{
              type:"error"
            }).then(()=>{}).catch(()=>{})
        }
      }).catch((err)=>{
        if(err) console.log(err)
      })
    },
    doCancel(){ //清除用户输入
      this.formData.aname="";
      this.formData.apwd=""
    }
  },
  // mounted() {
  //   // 当前组件挂载完成后需要一部请求全局配置数据
  //   var url=this.$store.state.globalSettings.apiUrl+"/admin/settings";
  //   this.$axios.get(url).then((res)=>{
  //     this.$store.commit("setGlobalSettings",res.data);
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // },
}
</script>



<style lang="scss"  >
  .xfn-login-card{
    width: 400px;
    margin: 100px auto;

    .el-card__header{
      text-align: center;
      font-size: 1.2em;    
    }
  }
</style>
