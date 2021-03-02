<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <el-container>
      <el-header>Bigmao Radio Station</el-header>
      <el-container>
        <el-aside>
          <el-menu>
            <el-menu-item index="2">
              <i class="el-icon-loading"></i>
              qingdao
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-loading"></i>
              qingdao
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-loading"></i>
              qingdao
            </el-menu-item>
          </el-menu>
        </el-aside>



        <el-main>
          <main1></main1>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import main1 from "@/components/main1";

export default {
  name: 'App',
  components: {
    main1
    // HelloWorld
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
