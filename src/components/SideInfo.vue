<template>
  <div>
    <div id="box"></div>
    <div id="box"></div>
  </div>
</template>

<script>
export default {
  name: "SideInfo",
};
</script>
<style scoped>
#box {
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}
</style>
