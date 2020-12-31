<template>
  <div id="app" class="container mx-auto">
    <Background />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
