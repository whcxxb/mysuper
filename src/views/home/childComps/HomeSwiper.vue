<template>
  <Swiper>
    <SwiperItem v-for="item in banners" :key="item.title">
      <img :src="item.image923" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/commone/swiper/index'
export default {
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
}
</script>

<style>
</style>