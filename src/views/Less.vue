<template>
  <div class="less">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>我是less</div>
  </div>
</template>

<script>
export default {
  name: "less"
};
</script>

<style lang="less">
.less {
  > div {
    color: @color;
  }
}
</style>
