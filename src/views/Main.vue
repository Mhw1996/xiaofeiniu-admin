<template>
  <div class="about">
    <!-- <h1>欢迎回来<span>{{$store.state.adminName}}</span></h1>
    <h1>This is an Main page</h1>
    <div>左侧的导航菜单</div>
    <div>上方的提示栏</div>
    <div>
      <h3>右下角主体部分</h3>
      
      
      <router-view></router-view> 
    </div>-->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        全局设置
        <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>桌台管理</template>
        <el-menu-item-group>
          <!-- <template slot="title">所有桌台</template> -->
          <el-menu-item index="1-1">所有桌台</el-menu-item>          
          <el-menu-item index="1-2">添加桌台</el-menu-item>
          <el-menu-item index="1-3">删除桌台</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>菜品类别</template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>菜品管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">所有菜品</el-menu-item>
          <el-menu-item index="3-2">添加菜品</el-menu-item>
          <el-menu-item index="3-3">删除菜品</el-menu-item>
          <el-menu-item index="3-4">修改菜品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部的信息栏 -->
        <el-header hight="60px">
          <MainHeader></MainHeader>
        </el-header>
        <!-- 主体部分 -->
        <el-main hight="1300px">
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MainHeader from ".././components/MainHeader"
export default {
  data(){
    return{}
  },
  beforeCreate() {
    // 组件创建之前先要检查知否已经登录为管理员
    var adminName=this.$store.state.adminName
    console.log(adminName)
    if(!this.$store.state.adminName){
      this.$router.push('/login');//未登录则跳转到登录
    }
  },
  components:{
    MainHeader
  }
}
</script>
