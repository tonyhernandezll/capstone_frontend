<template>
  <div class="container">
    <h1>New Shoe Entry</h1>
    <form v-on:submit.prevent="createShoe()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newShoeName" />
      <br />
      Price:
      <input type="text" v-model="newShoePrice" />
      <br />
      Description:
      <input type="text" v-model="newShoeDescription" />
      <br />
      Gender:
      <input type="text" v-model="newShoeGender" />
      <br />
      Size:
      <input type="text" v-model="newShoeSize" />
      <br />
      <br />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newShoeName: "",
      newShoePrice: "",
      newShoeDescription: "",
      newShoeGender: "",
      newShoeSize: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createShoe: function() {
      var params = {
        name: this.newShoeName,
        price: this.newShoePrice,
        description: this.newShoeDescription,
        gender: this.newShoeGender,
        size: this.newShoeSize,
      };
      axios
        .post("/api/products", params)
        .then(response => {
          this.$router.push("/products");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
