<template>
  <div class="goodslist">
    <GoodsItem class="goodsitem" v-for="(item, index) in goodslist" :key="index" :goodsitem="item" />
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  props: {
    goodslist: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    GoodsItem,
  },
}
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2px;
}
</style>