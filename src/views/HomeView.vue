<template>
  <div class="home">
    <NavbarView />
    <div class="container">
      <HeroView />
      <div class="row mt-4">
        <div class="col">
          <h1>Best <strong>Food</strong></h1>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"><b-icon-eye class="mr-2"></b-icon-eye>Lihat Semua</router-link>
        </div>
      </div>

      <div class="row mb-3">
        <!-- v-for adalah perulangan -->
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from "@/components/Navbar.vue";
import HeroView from "@/components/HeroView.vue";
import CardProduct from "@/components/CardView.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarView,
    HeroView,
    CardProduct,
  },
  data() {
    return {
      // Buat datanya dulu
      products: [],
    };
  },
  methods: {
    // Lalu membuat methodnya setproduct
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    // lalu setproduct di atur
    // Mengambil API lewat Axios
    axios
      .get("http://localhost:3000/best-products")
      .then((response) =>
        // handle success
        this.setProduct(response.data)
      )
      .catch((error) =>
        // handle error
        console.log("error : ", error)
      )
      .finally(function () {
        // always executed
      });
  },
};
</script>
