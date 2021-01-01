<template>
  <div>
    <div id="box">
      {{ temp }}
    </div>
    <div id="box"></div>
  </div>
</template>

<script>

export default {
  name: "SideInfo",
  props:["temp"],
  mounted() {
  },
};
</script>
<style scoped>
#box {
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
}
</style>
