<template>
  <div class="shop">
    <div class="shop-head">
      <span><img :src="shopInfo.shopLogo" alt="" /></span>
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-content">
      <div class="shop-content-left">
        <div class="xiaoliang">
          <div>{{(shopInfo.cSells/10000).toFixed(1) + '万'}}</div>
          <div>销量</div>
        </div>
        <div class="shuliang">
          <div>{{shopInfo.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="pingfen">
        <div v-for="(item,i) in shopInfo.score" :key="i">
          <span>{{item.name}}</span>
          <span>
            <span class="score">{{item.score}}</span>
            <span :class="{shopactive:item.score<5}" v-if="item.score<5">低</span>
            <span :class="{shopactive2:item.score>=5}" v-else>高</span>
          </span>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.shop {
  padding: 10px;
}
.shop-head {
  font-size: 20px;
  height: 60px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(51, 51, 51, 0.164);
  margin-bottom: 30px;
}
.shop-head img {
  width: 60px;
  height: 60px;
  padding: 3px;
  vertical-align: middle;
  border-radius: 50px;
  border: 1px solid #b2bec3;
}
.shop-content{
  font-size: 18px;
  font-weight: 600;
}
.shop-content div{
  margin-bottom: 10px;
}
.shop-content,.shop-content-left{
  display: flex;
  justify-content: space-around;
}
.shop-content-left{
  margin-top: 15px;
  border-right: 1px solid rgba(51, 51, 51, 0.164);
  text-align: center;
}
.xiaoliang,.shuliang{
  margin-right: 20px;
}
.shopactive{
  background-color: #4cd137;
  color: white;
  padding: 1;
}
.shopactive2{
  color: white;
  padding: 1;
  background-color:#d63031;
  margin-left: 21px;
}
.pingfen{
  font-size: 16px;
  font-weight: normal;
}
.score{
  margin-right: 15px;
}
.footer{
  margin-top: 15px;
  text-align: center;
  margin-right: 16px;
}
.footer span{
  font-size: 16px;
  border-radius: 10px;
  padding: 5px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #d1d8e0;
}
</style>