<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
props:{
  isbackto:{
    typeof:Boolean,
    default(){
      return false
    }
  }
}
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.back-top img{
  width: 47px;
  height: 47px;
}
</style>