import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsNew from "../views/ProductsNew.vue";
import ProductsShow from "../views/ProductsShow.vue";
import CartedProductsShow from "../views/CartedProductsShow.vue";
import UsersIndex from "../views/UsersIndex.vue";
import UsersShow from "../views/UsersShow.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/users", name: "users-index", component: UsersIndex },
  { path: "/users/:id", name: "users-show", component: UsersShow },
  { path: "/products/new", name: "products-new", component: ProductsNew },
  { path: "/products/:id", name: "product-show", component: ProductsShow },
  { path: "/carted_products", name: "carted_product-show", component: CartedProductsShow },

  {
    path: "/products",
    name: "products-index",
    component: ProductsIndex,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
