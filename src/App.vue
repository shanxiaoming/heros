<template>
  <div id="app">
      <!-- 网页的header -->
      <app-header></app-header>
      <div class="container-fluid">
        <div class="row">
          <!-- 侧边栏 -->
          <side-bar></side-bar>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import SideBar from './components/sidebar.vue';
export default {
  components:{
    AppHeader,
    SideBar
  }
  
}
</script>

<style>

</style>
