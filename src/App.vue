<template>
  <div id="app" class=" min-h-screen relative">
    <div class="h-16"></div>
    <Background class="pt-10" />
    <SideInfo
      :temp="currentTemp"
      :weatherState="weatherState"
      :weatherStateName="weatherStateName"
      class="absolute top-32"
    />
    <div class="grid grid-cols-4 container mx-auto pt-10">
      <Forecast :forecast="forecast" class="" />
      <div class="h-2">asdasd</div>
      <div class="h-2">asdasd</div>
      <div class="h-2">asdasd</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Background from "./components/Background";
import SideInfo from "./components/SideInfo";
import Forecast from "./components/Forecast";
export default {
  name: "App",
  components: { Background, SideInfo, Forecast },
  computed: mapState(["city", "forecast"]),
  data() {
    return {
      currentTemp: 0,
      weatherState: "",
      weatherStateName: "",
    };
  },
  async beforeCreate() {
    await this.$store.commit("updateCountry");
  },
  mounted() {
    setInterval(() => {
      if (this.forecast[0]) {
        this.currentTemp = this.forecast[0].the_temp;
        this.weatherState = `https://www.metaweather.com/static/img/weather/png/64/${this.forecast[0].weather_state_abbr}.png`;
        this.weatherStateName = this.forecast[0].weather_state_name;
      }
    }, 1000);
  },
};
</script>

<style></style>
