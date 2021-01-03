<template>
  <div>
    <div
      id="box"
      class="absolute w-28 h-36 flex items-center justify-center bg-secondary rounded-r-3xl top-28 z-10"
    >
      <span class="text-2xl font-bold pl-5 px-5 text-white">
        {{ Math.round(temp) }}&#8451;
      </span>
    </div>
    <div
      id="box"
      class="absolute w-28 h-36 flex flex-col items-center justify-center bg-primary rounded-r-3xl z-20"
    >
      <img :src="weatherState" alt="" />
      <h1 class="text-white">{{ weatherStateName }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideInfo",
  props: ["temp", "weatherState", "weatherStateName"],
  mounted() {},
};
</script>
<style scoped>
/* #box {
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  background-color: red;
} */
</style>
