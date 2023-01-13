<template>
    <div>
      <v-text-field id="inputName" label="Bennene diesen Ort" v-model="name" size="100%"></v-text-field>
      <v-text-field id="inputCoord1" label="Koordinate 1" v-model="coord1" size="100%"></v-text-field>
      <v-text-field id="inputCoord2" label="Koordinate 2" v-model="coord2" size="100%"></v-text-field>
      <v-text-field id="inputDescription" label="Beschreibung" v-model="description" size="100%"></v-text-field>
      <v-text-field id="inputType" label="Welche Pilze hast du gefunden?" v-model="type" size="100%"></v-text-field>
      <v-rating id="rating" v-model="rating" background-color="black" color="#ffcc00"></v-rating>
      <v-btn @click="addEntry">Add</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddEntry",
    data: function() {
      return {
        name: "",
        coord1: 0,
        coord2: 0,
        description: "",
        type: "",
        rating: 0
      };
    },
    methods: {
      addEntry: function() {
        if (this.name.length > 0) {
          this.$emit("entryAdded", {
            name: this.name,
            coord1: this.coord1,
            coord2: this.coord2,
            description: this.description,
            type: this.type,
            rating: this.rating
          });
          this.name = "";
          this.coord1= 0,
          this.coord2= 0,
          this.description= "",
          this.type= "",
          this.rating = 0;
        }
      }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  div {
    display: flex;
    align-items: center;
  }
  </style>