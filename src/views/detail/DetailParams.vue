<template>
  <div class="item-params" v-if="Object.keys(itemParams).length !== 0">
    <table v-for="(table, index) in itemParams.tables" class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-parasm">
      <tr v-for="(info, i) in itemParams.set" :key="i">
        <td class="info-key">{{ info.key }}</td>
        <td class="info-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="itemParams.image.length !== 0">
      <img :src="itemParams.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemParams: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.item-params {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.item-params table {
  width: 100%;
  border-collapse: collapse;
}
.item-params table tr {
  height: 42px;
}
.item-params table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-key{
  width: 95px;
}
.info-value{
  color: #eb4868
}
.info-params{
  border-top: 1px solid rgba(0,0,0,.1);
}
.info-img{
  width: 100%;
}
</style>