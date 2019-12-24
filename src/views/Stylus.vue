<template>
  <div class="stylus">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>我是stylus</div>
  </div>
</template>

<script>
export default {
  name: "stylus"
};
</script>

<style lang="stylus">
.stylus
  > div
    color $color
</style>
