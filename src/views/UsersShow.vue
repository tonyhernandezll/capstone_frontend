<template>
  <div class="container">
    <h3>Name: {{ user.name }}</h3>
    <h5>Email: {{ user.email}}</h5>

    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">products</h2>
          <h3 class="section-subheading text-muted">View inventory.</h3>
        </div>

        <div class="row">
          <div v-for="product in user.products" class="col-lg-4 col-sm-6 mb-4">
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
                <img class="img-fluid img-card" v-bind:src="product.images[0].url" alt />
              </a>
              <div class="portfolio-caption">
                <div class="portfolio-caption-heading">{{ product.name}}</div>
                <!-- <div class="portfolio-caption-subheading text-muted">Illustration</div> -->
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
                  <img
                    class="img-fluid d-block mx-auto"
                    v-for="image in currentProduct.images"
                    v-bind:src="image.url"
                    alt
                  />
                  <p>
                    Description: {{currentProduct.description}}
                    <!-- Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                    blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia
                    expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!-->
                  </p>
                  <ul class="list-inline">
                    <li>Price: {{currentProduct.price}}</li>
                    <li>Gender: {{currentProduct.gender}}</li>
                    <li>Size: {{currentProduct.size}}</li>
                  </ul>
                  <br />
                  <div id="map"></div>
                  <br />
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
img.img-card {
  height: 300px;
  object-fit: cover;
}

#map {
  height: 300px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      currentProduct: { image: { url: "" } },
      mapboxClient: null,
      map: null,
      marker: null,
    };
  },
  mounted: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.users);

      this.setupMap();
    });
  },
  methods: {
    showProduct: function(product) {
      this.currentProduct = product;
      if (this.marker) {
        this.marker.remove();
      }
      this.mapboxClient.geocoding
        .forwardGeocode({
          query: product.user_address,
          autocomplete: false,
          limit: 1,
        })
        .send()
        .then(response => {
          if (response && response.body && response.body.features && response.body.features.length) {
            var feature = response.body.features[0];
            // var popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
            this.marker = new mapboxgl.Marker()
              .setLngLat(feature.center)
              // .setPopup(popup)
              .addTo(this.map);
            this.map.flyTo({ center: feature.center });
          }
        });
    },
    setupMap: function() {
      console.log("setupMap");
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
      this.mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
      this.map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-87.6298, 41.8781], // starting position [lng, lat]
        zoom: 12, // starting zoom
      });
    },
  },
};
</script>