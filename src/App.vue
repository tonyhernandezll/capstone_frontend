<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/products">All Kicks</router-link>|
      <router-link to="/users">All Users</router-link>|
      <router-link to="/signup">Signup</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/logout">Logout</router-link>|
    </div>-->
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <img src="/assets/img/navbar-logo.svg" />
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ml-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/products">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/products/new">create product</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/users">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/signup">Signup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/logout">Logout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/carted_products">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">Welcome To Sneaker City!</div>
        <!-- <div class="masthead-heading text-uppercase">It's Nice To Meet You</div> -->
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="/home">Tell me more</a>
      </div>
    </header>
    <router-view />
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-dark btn-social mx-2" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="btn btn-dark btn-social mx-2" href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="btn btn-dark btn-social mx-2" href="#!">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div class="col-lg-4 text-lg-right">
            <a class="mr-3" href="#!">Privacy Policy</a>
            <a href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
<script>
export default {
  mounted: function() {
    setuptheme();
  },
};
</script>
