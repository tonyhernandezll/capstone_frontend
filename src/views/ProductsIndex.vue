<template>
  <div class="container">
    <h1>All Kicks</h1>
    <div v-for="product in products">
      <h2>{{ product.name }}</h2>
      <p>Image: {{ product.image.url}}</p>
      <img v-bind:src="product.image.url" alt />
      <p>Price: {{ product.price }}</p>
      <p>Description: {{ product.description }}</p>
      <router-link v-bind:to="`/products/${product.id}`">More details</router-link>
    </div>
  </div>
</template>

<style>
img {
  width: 350px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      products: [],
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
      console.log(this.products);
    });
  },
  methods: {},
};
</script>