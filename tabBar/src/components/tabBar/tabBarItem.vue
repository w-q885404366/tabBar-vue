<template>
  <div class="tab-bar-item" @click="itemClickRouter">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  data() {
    return {
       
    }
  },
  computed: {
isActive(){
  // 判断活跃的路由是否和当前的路由一致,一致为true
  return this.$route.path.indexOf(this.path) !== -1
},
activeStyle(){
  return  this.isActive? {color:this.activeColor} : {}
}
  },
  props:{
path:String,
activeColor:{
  type:String,
  default:'red'
}
  },
  methods: {
itemClickRouter() {
  this.$router.replace(this.path)
}
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 32px;
  height: 26px;
  vertical-align: middle;
  margin-top: 3px;
}

</style>
