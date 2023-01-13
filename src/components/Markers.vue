<template>
  <MglMap
    :accessToken="mapboxAccessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <MglMarker :coordinates="coordinates" color="blue" />
  </MglMap>
</template>

<script>
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker
  },
  data() {
    return {
      mapStyle: "mapbox://styles/mapbox/basic-v10",
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>
