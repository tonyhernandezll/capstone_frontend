<template>
  <div class="container">
    <h2>Name: {{ user.name }}</h2>
    <p>Email: {{ user.email}}</p>
    <p>Products: {{ user.products}}</p>
    <!-- <p>Image: {{ product.image}}</p>
    <img v-bind:src="product.image" alt />
    <p>Price: {{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Gender: {{ product.gender }}</p>-->
    <router-link to="/users">Back to all Users</router-link>
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
      user: {},
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.users);
    });
  },
  methods: {},
};
</script>