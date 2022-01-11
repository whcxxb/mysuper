<template>
  <div class="shopimg" v-if="Object.keys(shopImg).length !== 0">
    <div class="shop-desc">
      {{ shopImg.desc }}
    </div>
    <div class="shop-key">
      {{ shopImg.detailImage[0].key }}
    </div>
    <div class="shopimg-img">
      <img @load="imgload" :src="item" alt="" v-for="(item, i) in shopImg.detailImage[0].list" :key="i"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopImg: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      counter:0,
      imgLength:0
    }
  },
  methods: {
    imgload(){
      if(++this.counter === this.imgLength){
        this.$emit('imgeload')
      }
    }
  },
  watch:{
    shopImg(){
      this.imgLength = this.shopImg.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.shopimg-img img {
  width: 100%;
}
</style>