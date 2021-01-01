<template>
  <div id="app" class=" min-h-screen container mx-auto">
    <div class="h-10"></div>
    <Background class="pt-10"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Background from "./components/Background";
export default {
  name: "App",
  components: { Background },
  computed: mapState(["city"]),
  mounted() {
    this.$store.commit("updateCountry");
  },
};
</script>

<style>

</style>
