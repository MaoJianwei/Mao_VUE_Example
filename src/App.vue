<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <el-container class="class-container">
      <el-header>Bigmao Radio Station</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="/deviceControl" style="height: 100%" router>
            <el-menu-item index="/deviceControl">
              <el-icon><Menu /></el-icon>
              <span>设备管理</span>
            </el-menu-item>
            <el-menu-item index="/cloudMonitor">
              <el-icon class="is-loading"><Loading /></el-icon>
              <span>qingdao</span>
            </el-menu-item>
            <el-menu-item index="/ONOS">
              <el-icon><Loading /></el-icon>
              <span>ONOS</span>
            </el-menu-item>
          </el-menu>
        </el-aside>



        <el-main>
          <router-view name="maoMain"></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script setup>
import {
  Menu,
    Loading
} from '@element-plus/icons-vue'
</script>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.class-container {
  /*background:url('../img/bg.jpg') repeat center top #826e79;*/
  height: 100%;
  width: 100%;
  position: fixed;
}
</style>
