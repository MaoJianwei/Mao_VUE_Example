<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <el-container class="class-container">
      <el-header>Bigmao Radio Station</el-header>
      <el-container>
        <el-aside>
          <el-menu default-active="/deviceControl" style="height: 100%" router>
            <el-menu-item index="/deviceControl">
              <i class="el-icon-menu"></i>
              设备管理
            </el-menu-item>
            <el-menu-item index="/cloudMonitor">
              <i class="el-icon-loading"></i>
              qingdao
            </el-menu-item>
            <el-menu-item index="/ONOS">
              <i class="el-icon-loading"></i>
              ONOS
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
