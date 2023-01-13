
<template>

 
<div> 

<VMap
style="zIndex: 50" 
:accessToken="token" 
:mapStyle="mapStyle" 
:center="coordinates"
>
</VMap>

  <div>/>

    
    <h1>Professor Rating App</h1>
    <AddEntry id="addEntry" @entryAdded="addEntry"></AddEntry>
    <ListEntries
      id="listEntry"
      v-for="(singleEntry, index) of listOfEntries"
      :key="index"
      :entry="singleEntry"
      :index="index"
      @entryRemoved="removeEntry"
      @entryEdited="editEntry"
    ></ListEntries>

    
  </div>

</div>
  
  
</template>


<script>

import 'mapbox-gl/dist/mapbox-gl.css'
import 'v-mapbox/dist/v-mapbox.css';
import mapbox from "mapbox-gl"
import { VMap } from "v-mapbox"


import AddEntry from "./components/AddEntry.vue";
import ListEntries from "./components/ListEntries.vue";
import axios from "axios";


export default {

  
  name: "App",
  components: {

    VMap,
    AddEntry,
    ListEntries,
  },
  data: function () {
    return {
      token: 'pk.eyJ1IjoicGlsemJlcmVpY2giLCJhIjoiY2xjdXh1aXNmMHppczNxcDRraWMxOG96ZyJ9.I3MlSpeqM_TWCUNfkl7rmg',
      listOfEntries: [],
      mapStyle: 'mapbox://styles/mapbox/outdoors-v12',
      //mapStyle: "mapbox://styles/pilzbereich/clcuy5q5g001u16ql2k6aqb3c",
      coordinates: [-111.549668, 39.014],
      map: null
    };
  },
  methods: {
    loaded: function(e) {
      this.map = e.map
    },
    addEntry: function (e) {
      axios
        .post("http://"+window.location.hostname+":8080/profs/", {
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
        .put("http://"+window.location.hostname+":8080/profs/" + e.index, {
          name: e.name,
          rating: e.rating,
        })
        .then((response) => {
          this.listOfEntries = response.data; //TODO: change this, do not return full list
        });
    },
    removeEntry: function (e) {
      axios
        .delete("http://"+window.location.hostname+":8080/profs/" + e.index)
        .then((response) => {
          this.listOfEntries = response.data;
        });
    },
  },
  mounted() {
    axios.get("http://"+window.location.hostname+":8080/profs/").then((response) => {
      this.listOfEntries = response.data;
    });
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = mapbox;
  }
  
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
