<template>
  <div class="tab-bar-item" @click="go">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive:false
    }
  },
  computed:{
    isActive(){
      //this.$route.path 当前路径  和 传过来的 path做比较
      return this.$route.path.indexOf(this.path) !== -1
    },
    //动态控制菜单文字颜色
    activeStyle(){
      return this.isActive ?{color:this.activeColor}:{}
    }
  },
  props:{
    //接受app组件传值
    path:String,
    activeColor:{
      type:String,
      default:'#e74c3c'
    }
  },
  methods: {
    //组件跳转
    go(){
      this.$router.push(this.path)
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 50px;
  font-size: 13px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>