<template>
  <div class="container">
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">products</h2>
          <h3 class="section-subheading text-muted">View inventory.</h3>
        </div>
        <div class="row">
          <div v-for="product in products" class="col-lg-4 col-sm-6 mb-4">
            <div class="portfolio-item">
              <a
                v-on:click="currentProduct = product"
                class="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal1"
              >
                <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid img-card" v-bind:src="product.image.url" alt />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">{{ product.name}}</div>
                <!-- <div class="portfolio-caption-subheading text-muted">product</div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <img src="assets/img/close-icon.svg" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project Details Go Here-->
                  <h2 class="text-uppercase">{{currentProduct.name}}</h2>
                  <p class="item-intro text-muted"></p>
                  <img class="img-fluid d-block mx-auto" v-bind:src="currentProduct.image.url" alt />
                  <p>
                    Description: {{currentProduct.description}}
                    <!-- Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                    blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                    expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!-->
                  </p>
                  <ul class="list-inline">
                    <li>Price: {{currentProduct.price}}</li>
                    <li>Gender: {{currentProduct.gender}}</li>
                    <li>Size: 10</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fas fa-times mr-1"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h1>All Kicks</h1> -->
    <div v-for="product in products">
      <!-- <h2>{{ product.name }}</h2>
      <p>Image: {{ product.image.url}}</p>
      <img v-bind:src="product.image.url" alt />
      <p>Price: {{ product.price }}</p>
      <p>Description: {{ product.description }}</p>-->
      <!-- <router-link v-bind:to="`/products/${product.id}`">More details</router-link> -->
    </div>
  </div>
</template>

<style>
img.img-card {
  height: 300px;
  object-fit: cover;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      products: [],
      currentProduct: { image: {} },
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