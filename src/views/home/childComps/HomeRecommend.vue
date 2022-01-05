<template>
  <div class="recommend">
    <div  v-for="(item,i) in recommend" :key="i" class="recommend-item">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
 props:{
   recommend:{
     type:Array,
     default(){
       return []
     }
   }
 }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 5px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 80%;
  margin-bottom: 3px;
}
</style>