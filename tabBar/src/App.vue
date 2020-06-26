<template>
  <div id="app">
    <tab-bar>
      <!--activeColor中可以是自己的颜色  也可以是默认red  -->
      <tab-bar-item path='/index' activeColor="">
        <img slot='item-icon' src="./assets/img/tabBar/beforeIndex.png" alt="">
        <img slot='item-icon-active' src="./assets/img/tabBar/afterIndex.png" alt="">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/select'>
        <img slot='item-icon' src="./assets/img/tabBar/beforeSelect.png" alt="">
        <img slot='item-icon-active' src="./assets/img/tabBar/afterSelect.png" alt="">
        <div slot='item-text'>分类</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot='item-icon' src="./assets/img/tabBar/beforeCategory.png" alt="">
        <img slot='item-icon-active' src="./assets/img/tabBar/afterCategory.png" alt="">
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/mine'>
        <img slot='item-icon' src="./assets/img/tabBar/beforeMine.png" alt="">
        <img slot='item-icon-active' src="./assets/img/tabBar/afterMine.png" alt="">
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
    <!-- 站位的  必须有的组件 -->
    <router-view></router-view>
  </div>
  
</template>

<script>
import TabBar from "./components/tabBar/tabBar";
import TabBarItem from "./components/tabBar/tabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>


<style>
@import "./assets/css/base.css";
</style>
