<template>
  <div class="">
    <div class="text-center">
      <span class="text-2xl"
        ><strong class="text-heading">3 Days</strong> Forecast</span
      >
    </div>
    <div class="flex flex-col pt-10">
      <div class="flex flex-col gap-5">
        <div class="flex flex-row justify-between border-2 rounded-2xl">
          <div class="flex flex-row gap-5">
            <img :src="bg1" />
            <div class="flex flex-col">
              <span>{{
                new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
                  new Date(forecast[1].applicable_date)
                )
              }}</span>
              <span>{{ forecast[1].weather_state_name }}</span>
            </div>
          </div>
          <div class="bg-secondary text-white rounded-2xl flex items-center">
            <span class="p-2"
              >{{ Math.round(forecast[1].min_temp) }}&#8451; /
              {{ Math.round(forecast[1].max_temp) }}&#8451;</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col pt-10">
      <div class="flex flex-col gap-5">
        <div class="flex flex-row justify-between border-2 rounded-2xl">
          <div class="flex flex-row gap-5">
            <img :src="bg2" />
            <div class="flex flex-col">
              <span>{{
                new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
                  new Date(forecast[2].applicable_date)
                )
              }}</span>
              <span>{{ forecast[2].weather_state_name }}</span>
            </div>
          </div>
          <div class="bg-secondary text-white rounded-2xl flex items-center">
            <span class="p-2"
              >{{ Math.round(forecast[2].min_temp) }}&#8451; /
              {{ Math.round(forecast[2].max_temp) }}&#8451;</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col pt-10">
      <div class="flex flex-col gap-5">
        <div class="flex flex-row justify-between border-2 rounded-2xl">
          <div class="flex flex-row gap-5">
            <img :src="bg3" />
            <div class="flex flex-col">
              <span>{{
                new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
                  new Date(forecast[3].applicable_date)
                )
              }}</span>
              <span>{{ forecast[3].weather_state_name }}</span>
            </div>
          </div>
          <div class="bg-secondary text-white rounded-2xl flex items-center">
            <span class="p-2"
              >{{ Math.round(forecast[3].min_temp) }}&#8451; /
              {{ Math.round(forecast[3].max_temp) }}&#8451;</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forecast",
  props: ["forecast"],
  mounted() {
    // this.bg1 = `https://www.metaweather.com/static/img/weather/png/64/${this.forecast[1].weather_state_abbr}.png`
    // this.bg2 = `https://www.metaweather.com/static/img/weather/png/64/${this.forecast[2].weather_state_abbr}.png`
    // this.bg3 = `https://www.metaweather.com/static/img/weather/png/64/${this.forecast[3].weather_state_abbr}.png`
  },
  data() {
    return {
      bg1: `https://www.metaweather.com/static/img/weather/png/64/${this.forecast[1].weather_state_abbr}.png`,
      bg2: `https://www.metaweather.com/static/img/weather/png/64/${this.forecast[2].weather_state_abbr}.png`,
      bg3: `https://www.metaweather.com/static/img/weather/png/64/${this.forecast[3].weather_state_abbr}.png`,
    };
  },
};
</script>
