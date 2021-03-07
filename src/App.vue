<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <el-container>
      <el-header>Bigmao Radio Station</el-header>
      <el-container>
        <el-aside>
          <el-menu default-active="/deviceControl" router>
            <el-menu-item index="/deviceControl">
              <i class="el-icon-menu"></i>
              设备管理
            </el-menu-item>
            <el-menu-item index="/cloudMonitor">
              <i class="el-icon-loading"></i>
              qingdao
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-loading"></i>
              qingdao
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
</style>
