<template>
  <div class="container">
    <h2>{{ CartedProduct.quantity }}</h2>
    <p>Quantity: {{ CartedProduct.quantity}}</p>
    <img v-bind:src="product.image" alt />
    <p>Status: {{ CartedProduct.status }}</p>

    <!-- <router-link to="/products">Back to all Kicks</router-link> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      CartedProduct: {},
    };
  },
  created: function() {
    axios.get("/api/carted_products/" + this.$route.params.id).then(response => {
      this.CartedProduct = response.data;
      console.log(this.CartedProduct);
    });
  },
  methods: {},
};
</script>