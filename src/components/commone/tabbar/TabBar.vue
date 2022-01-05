<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.tab-bar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
}
</style>