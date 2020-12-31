import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countryName: "",
    continent: "",
    city: "",
  },
  mutations: {
    updateCountry(state) {
      Vue.axios.get("https://api.ipify.org?format=json").then((res) => {
        if (!res.data) return;
        Vue.axios
          .get(
            `http://ip-api.com/json/${res.data.ip}?fields=status,message,continent,continentCode,country,countryCode,regionName,city`
          )
          .then((data) => {
            if (data.data.status === "fail") return;
            console.log(data.data);
            state.countryName = data.data.country;
            state.continent = data.data.continent;
            state.city = data.data.city;
          });
      });
    },
  },
  actions: {},
  modules: {},
});
