<template>
  <div id="app-header">
    <p class="box-item">
      <span>小肥牛管理后台</span>  
      <span class="right-btn">登录用户:{{$store.state.adminName}} 
        <el-button type="primary" plain class="back">退出</el-button>
      </span>
    </p>

  </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #app-header .box-item{
    background: rgba(100,100,100,0.1);
    padding:20px;
    border-radius: 4px;
  }
  #app-header .box-item span{
     font-size: 20px;
  }
  #app-header .right-btn{
    float: right;  
  }
  #app-header .back{
    line-height: 10px; 
    margin-left: 10px; 
  }
</style>
