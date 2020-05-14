<template>
  <div class="container">
    <h2>{{ carted_product.product }}</h2>
    <p>Image: {{ product.image}}</p>
    <img v-bind:src="product.image" alt />
    <p>Price: {{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Gender: {{ product.gender }}</p>
    <!-- <router-link to="/products">Back to all Kicks</router-link> -->
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
      carted_product: {},
    };
  },
  created: function() {
    axios.get("/api/carted_products/" + this.$route.params.id).then(response => {
      this.carted_product = response.data;
      console.log(this.CartedProduct);
    });
  },
  methods: {},
};
</script>