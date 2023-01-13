<template>
  <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
  >
  <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
    />

  
  </GMapMap>
</template>

<script >
export default {
  name: 'App',
  data() {
    return {
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
      ],
      center: {lat: 51.093048, lng: 6.842120},
    }
  }
}
</script>
