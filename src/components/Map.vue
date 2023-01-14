<template>
  <div ref="map" style="width: 300px; height: 300px"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "Map",
  props: {
    markers: {
      type: Array,
      default: () => [{id: 0, lat: 47.8085431415187, lng: 9.637756347656252}]
    }
  },
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.map = L.map(this.$refs.map, {
      center: [this.markers[0].lat, this.markers[0].lng],
      zoom: 13
    })
    this.map.on('click', (e) => {
      console.log(e.latlng.lat, e.latlng.lng)
    })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.markers.forEach((marker) => {
      const nm = L.marker([marker.lat, marker.lng]).addTo(this.map);
      nm.on('click', () => console.log(marker.id))
    })
  }
}
</script>

<style scoped>

</style>