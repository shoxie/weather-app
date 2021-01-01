<template>
  <div id="app" class=" min-h-screen">
    <div class="h-10"></div>
    <Background class="pt-10" />
    <SideInfo :temp="currentTemp" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Background from "./components/Background";
import SideInfo from "./components/SideInfo";
export default {
  name: "App",
  components: { Background, SideInfo },
  computed: mapState(["city", "forecast"]),
  date() {
    return {
      currentTemp: 0,
    };
  },
  beforeCreate() {
    this.$store.commit("updateCountry");
  },
  mounted() {
    setInterval(() => {
      if (this.forecast[0]) {
        this.currentTemp = this.forecast[0].the_temp;
      }
    }, 1000);
  },
};
</script>

<style></style>
