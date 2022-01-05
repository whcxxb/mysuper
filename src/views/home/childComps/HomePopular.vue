<template>
  <div>
    <div class="popular-title">本周流行</div>
    <div class="popular">
      <div class="popular-item" v-for="(item, index) in recommend" :key="index">
        <img :src="item.image" alt="" />
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
.popular {
  display: flex;
  text-align: center;
  font-size: 12px;
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 5px solid #eee;
  margin-top: 10px;
}
.popular-item {
  flex: 1;
}
.popular-item img {
  width: 80%;
  margin-bottom: 3px;
}
.popular-title{
  text-align: center;
  font-size: 20px;
  margin-top: 5px;
}
</style>