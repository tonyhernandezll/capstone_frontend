<template>
  <div class="container">
    <h2>{{ product.name }}</h2>
    <p>Image: {{ product.image.url}}</p>
    <img v-bind:src="product.image.url" alt />
    <p>Price: {{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <router-link to="/products">Back to all Kicks</router-link>
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
      product: {},
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id).then(response => {
      this.products = response.data;
      console.log(this.products);
    });
  },
  methods: {},
};
</script>