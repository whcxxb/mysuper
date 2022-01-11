<template>
  <div class="info" v-if="Object.keys(resultInfo).length !== 0">
    <div class="ts">
      {{ resultInfo.title }}
    </div>
    <div class="priceinfo">
      <span class="price2">{{ resultInfo.newPrice }}</span>
      <span class="oldPrice">{{ resultInfo.oldPrice }}</span>
      <span class="discount">{{ resultInfo.discountDesc }}</span>
      <span></span>
    </div>
    <div class="columns">
      <span>{{ resultInfo.columns[0] }}</span>
      <span>{{ resultInfo.columns[1] }}</span>
      <span>{{ resultInfo.services[0].name }}</span>
    </div>
    <div class="service">
      <span>
        <img :src="resultInfo.services[0].icon" alt="" />
        {{ resultInfo.services[1].name }}
      </span>
      <span>
        <img :src="resultInfo.services[0].icon" alt="" />
        {{ resultInfo.services[2].name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resultInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scope>
.info {
  padding: 5px;
  margin-top: 10px;
}
.ts {
  font-weight: 500;
  font-size: 20px;
  color: #2d3436;
}
.priceinfo{
   margin-top: 10px;
}
.price2 {
  color: #ff7675;
  font-size: 26px;
  margin-right: 10px;
}
.oldPrice {
  color: #b2bec3;
  text-decoration: line-through;
  font-size: 16px;
  margin-right: 5px;
}
.columns {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.164);
}
.service {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 14px;
  line-height: 14px;
  color: #333;
}
.service img {
  width: 15px;
  height: 15px;
}
.discount {
  background-color: #ff7675;
  padding: 3px;
  color: white;
  border-radius: 10px;
}
</style>