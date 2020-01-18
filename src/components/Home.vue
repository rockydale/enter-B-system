<template>
  <div class="home">

    <!--布局-->
    <el-container class="home-container">
      <!-- 头部 -->
      <el-header>
        
          <div class="logo">
            <img src="../assets/logo.png" alt="" style="width:30px;height:30px;border-radius: 15px;">
            <span>恩特校园-广东海洋大学</span> 
          </div>
         <!--顶部logo-->
        <div style="width:75%; display:flex; justify-content: space-between;">
          
            <i class="el-icon-s-unfold" style="marign-right:500px;"></i>
            <div style="width:20%;display:flex; justify-content: space-between;">
              <i class="el-icon-search" ></i>
              <i class="el-icon-bell" ></i>
              <img src="../assets/userlogo.png" alt="" style="width:30px;height:30px;border-radius: 15px;">
              <span>Daitry</span> 
            </div>
            
        </div>
        
      </el-header>

      <el-container>
        <!-- 侧栏 -->
        <el-aside :width="isCollapse ? '64px' : '256px' ">
          <!-- 侧边栏菜单区 -->
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu
            background-color="rgba(255, 255, 255, 1)"
            text-color="rgba(0, 0, 0, 1)"
            active-text-color="rgba(255, 218, 69, 1)"
            unique-opened :collapse="isCollapse" :collapse-transition="false"
            :router="true">
            <!-- 一级菜单 -->
            <el-submenu index="1">
              <!-- 一级菜单模板 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>仪表盘</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item-group>
                <el-menu-item index="1-1">工作台</el-menu-item>
                <el-menu-item index="1-2">用户数据</el-menu-item>
                <el-menu-item index="1-3">业务数据</el-menu-item>
              </el-menu-item-group>
            </el-submenu> <!-- 仪表盘 -->

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>广告管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="carousel">轮播管理</el-menu-item>
                <el-menu-item index="article">文章管理</el-menu-item>
                <el-menu-item index="poster">海报管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>门店管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="storelist">门店列表</el-menu-item>
                <el-menu-item index="delivery">配送列表</el-menu-item>
                <el-menu-item index="service">服务列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">用户列表</el-menu-item>
                <el-menu-item index="4-2">专业列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>地区管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">城市列表</el-menu-item>
                <el-menu-item index="5-2">学校列表</el-menu-item>
                <el-menu-item index="5-3">校区列表</el-menu-item>
                <el-menu-item index="5-4">大院列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">项目管理</el-menu-item>
                <el-menu-item index="6-2">权限管理</el-menu-item>
                <el-menu-item index="6-3">用户类型</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-aside>
        <!-- 主要内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'',
      isCollapse:false,

      
    }
  },       //数据
  methods: {
    //点击按钮侧边栏展开与折叠
    toggleCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }   //方法
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-container{
  height: 100%;
}
.logo{
  display:inline-block;width:265px;height:30px;
  
}
.el-header{
  background-color: rgba(255,255,255,1);
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  border-bottom:1px solid rgba(240,242,245,1);
}
.el-header span{
  margin-left:15px;
  display:inline-block;
  height: 30px;
  line-height: 30px; 
}
.el-header div{
  display: flex;
  align-items: center; 
}
.el-aside{
  background-color: rgba(255,255,255,1);
  border-right: 1px solid rgba(255, 218, 69, 1); 
  box-sizing: border-box;
}
.el-main{
  background-color: rgba(240,242,245,1);
  padding: 0;
  
}
.toggle-button{
  background-color: rgba(255, 218, 69, 0.8);
  color: #fff;
  line-height: 24px;
  text-align: center;
  font-size: 10px;
  letter-spacing: 0.2em;
  cursor:pointer;
}

.el-menu-item:hover{
  background-color: rgba(255,251,236, 1) !important;
}
.el-menu-item.is-active{
  background-color: rgba(255,251,236, 1) !important;
}

</style>
