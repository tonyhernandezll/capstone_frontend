<template>
  <div class="container">
    <h1>All Users</h1>
    <div v-for="user in users">
      <h2>{{ user.name }}</h2>
      <!-- <p>Shoes: {{ user.product.description }}</p> -->
      <!-- <p>Image: {{ product.image.url}}</p>
      <img v-bind:src="product.image.url" alt />
      <!-- <p>Description: {{ product.description }}</p>-->
      <router-link v-bind:to="`/users/${user.id}`">More details</router-link>
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
      users: [],
    };
  },
  created: function() {
    axios.get("/api/users/").then(response => {
      this.users = response.data;
      console.log(this.users);
    });
  },
  methods: {},
};
</script>