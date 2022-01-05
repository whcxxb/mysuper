<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in title" :key="index" :class="{ active: index === currentIndex}"
    @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex  = index
      this.$emit('tabclick',index)
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 3px;
}
.active {
  color: hotpink;
}
.active span {
  border-bottom: 2px solid hotpink;
}
</style>