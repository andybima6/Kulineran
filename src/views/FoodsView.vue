<template>
    <div>
      <NavbarView />
      <div class="container">
        <HeroView />
        <div class="row">
          <div class="col mt-4">
            <h2>Daftar <strong>Makanan</strong></h2>
          </div>
        </div>
  
        <div class="row mb-3">
          <!-- v-for adalah perulangan -->
          <div class="col-md-3 mt-4" v-for="product in daftarProducts" :key="product.id">
            <!-- Pass 'product' as the prop -->
            <CardProduct :product="product" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeroView from "@/components/HeroView.vue";
  import NavbarView from "@/components/Navbar.vue";
  import CardProduct from "@/components/CardView.vue";
  import axios from "axios";
  
  export default {
    name: "FoodsView",
    components: {
      NavbarView,
      HeroView,
      CardProduct,
    },
    data() {
      return {
        // Data property should be named 'daftarProducts'
        daftarProducts: [],
      };
    },
    methods: {
      // Method to set 'daftarProducts'
      setProduct(data) {
        this.daftarProducts = data;
      },
    },
    mounted() {
      // Fetch data from API using Axios
      axios
        .get("http://localhost:3000/products")
        .then((response) =>
          // Handle success
          this.setProduct(response.data)
        )
        .catch((error) =>
          // Handle error
          console.log("error : ", error)
        )
        .finally(function () {
          // Always executed
        });
    },
  };
  </script>
  
  <style></style>
  