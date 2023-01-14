<template>
  <div>
    <Map :markers="markers" />
    <div>
      <h1>Professor Rating App</h1>
      <AddEntry id="addEntry" @entryAdded="addEntry"></AddEntry>
      <ListEntries
          v-for="(singleEntry, index) of listOfEntries"
          id="listEntry"
          :key="index"
          :entry="singleEntry"
          :index="index"
          @entryEdited="editEntry"
          @entryRemoved="removeEntry"
      ></ListEntries>
    </div>
  </div>
</template>


<script>
import AddEntry from "./components/AddEntry.vue";
import ListEntries from "./components/ListEntries.vue";
import axios from "axios";
import Map from "@/components/Map.vue";

export default {
  name: "App",
  components: {
    Map,
    AddEntry,
    ListEntries,
  },
  data: function () {
    return {
      token: 'pk.eyJ1IjoicGlsemJlcmVpY2giLCJhIjoiY2xjdXh1aXNmMHppczNxcDRraWMxOG96ZyJ9.I3MlSpeqM_TWCUNfkl7rmg',
      listOfEntries: [],
      mapStyle: "mapbox://styles/pilzbereich/clcuy5q5g001u16ql2k6aqb3c",
      markers: [
        {
          id: 0,
          lat: 47.8085431415187,
          lng: 9.637756347656252
        },
        {
          id: 1,
          lat: 111,
          lng: 30
        },
        {
          id: 2,
          lat: 0,
          lng: 90
        },
        {
          id: 3,
          lat: 70,
          lng: 10
        },
        {
          id: 4,
          lat: 0,
          lng: 0
        }
      ],
    };
  },
  methods: {
    addEntry: function (e) {
      axios
          .post("http://" + window.location.hostname + ":8080/profs/", {
            name: e.name,
            coord1: e.coord1,
            coord2: e.coord2,
            description: e.description,
            type: e.type,
            rating: e.rating,
          })
          .then((response) => {
            this.listOfEntries = response.data;
          });
    },
    editEntry: function (e) {
      axios
          .put("http://" + window.location.hostname + ":8080/profs/" + e.index, {
            name: e.name,
            rating: e.rating,
          })
          .then((response) => {
            this.listOfEntries = response.data; //TODO: change this, do not return full list
          });
    },
    removeEntry: function (e) {
      axios
          .delete("http://" + window.location.hostname + ":8080/profs/" + e.index)
          .then((response) => {
            this.listOfEntries = response.data;
          });
    },
  },
  async mounted() {
    /*await axios.get("http://" + window.location.hostname + ":8080/profs/").then((response) => {
      this.listOfEntries = response.data;
    });*/
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

  margin: 0;

  background-color: lightblue;
}

#addEntry,
h1 {
  margin-bottom: 40px;
}
</style>
