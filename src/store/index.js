import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { createClient } from "pexels";
const client = createClient(
  "563492ad6f917000010000011a22a35462f64ebc8bc3f69719697ac9"
);
export default new Vuex.Store({
  state: {
    country: String,
    continent: String,
    city: String,
    backgroundUrl: String,
    lat: String,
    lon: String,
    forecast: "",
  },
  mutations: {
    async updateCountry(state) {
      await Vue.axios.get("https://api.ipify.org?format=json").then((res) => {
        if (!res.data) return;
        Vue.axios
          .get(
            `http://ip-api.com/json/${res.data.ip}?fields=status,message,continent,continentCode,country,countryCode,regionName,city,lat,lon`
          )
          .then((data) => {
            if (data.data.status === "fail") return;
            state.country = data.data.country;
            state.continent = data.data.continent;
            state.city = data.data.city;
            state.lat = data.data.lat;
            state.lon = data.data.lon;
            let query = data.data.city;
            client.photos.search({ query, per_page: 1 }).then((cac) => {
              state.backgroundUrl = cac.photos[0].src.original;
            });
            Vue.axios
              .get(
                `http://103.90.233.35:3000/cityid?lat=${data.data.lat}&lon=${data.data.lon}`
              )
              .then((city) => {
                console.log(city);
                Vue.axios
                  .get(`http://103.90.233.35:3000/weather?id=${city.data.id}`)
                  .then((forecast) => {
                    state.forecast = forecast.data.consolidated_weather;
                  });
              });
          });
      });
    },
  },
  actions: {},
  modules: {},
});
