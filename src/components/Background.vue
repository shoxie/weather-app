<template>
  <div
    class="bg-cover h-96 flex flex-row pl-20 rounded-2xl"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
  >
    <div class="flex flex-row gap-5">
      <div class="flex flex-col items-center">
        <i class="fad fa-map-marker-alt text-purple-600 text-2xl"></i>
        <div></div>
      </div>
      <div class="flex flex-col">
        <span class="text-2xl"
          ><strong class="text-heading">{{ city }}</strong></span
        >
        <span class="">City in {{ country }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Background",
  computed: mapState(["backgroundUrl", "city", "country"]),
};
</script>
